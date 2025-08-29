"use client";

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { rawDate } from '@/utils/core';
import { format, set, add, sub, isEqual, getDay, getDate,getMonth, getYear } from "date-fns";
/* COMPONENT */
import UxIcon from "@/components/base/UxIcon";

/**
 * <YearCalendar>
 * [props]
 *
 * [event]
 *
 */

const YearCalendar = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const [data, setData] = useState([]);
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [date, setDate] = useState(props.date || format(new Date(), dateFormat));
	const [year] = useState(getYear(rawDate(date)));
	const [row, col] = [5, 3];
	const focusRef = useRef();

	const getData = (year) => {
		let count = row * col * 11;
		let index = year + Math.floor(count / 2);
		let array = [];

		while (array.length < count) {
			array.unshift(index--);
		}

		return array;
	};

	const handleClick = (item) => {
		setDate(format(set(rawDate(date), { year: item }), dateFormat));
		props.onChange && props.onChange(item);
	};

	const setScroll = () => {
		if (focusRef.current) {
			focusRef.current.scrollIntoView({
				block: "center",
				inline: "nearest",
				behavior: "smooth"
			});
		}
	};

	useEffect(() => {
		setData(getData(year));
	}, [year]);

	useEffect(() => {
		props.scrollIntoView && setScroll();
	}, [data]);

	useEffect(() => {
		if (typeof props.year === 'number') {
			setData(getData(props.year));
		}
	}, [props.year]);

	useEffect(() => {
		if (typeof props.date === 'string') {
			setDate(props.date);
		}
	}, [props.date]);

	return (
		<div
			ref={ref}
			className={`${baseClassName}-year`}
		>
			{
				data.map((item, index) => {
					const selected = item === getYear(rawDate(date));

					return (
						<button
							key={index}
							ref={(element) => {
								if (item === getYear(rawDate(date))) {
									focusRef.current = element;
								}
							}}
							type="button"
							className={classnames(`${baseClassName}-button`, {selected})}
							style={{width: `${100 / col}%`}}
							onClick={() => handleClick(item)}
						>
							<span
								className={`${baseClassName}-label`}
							>
								{`${item}년`}
							</span>
						</button>
					)
				})
			}
		</div>
	);
};

/**
 * <MonthCalendar>
 * [props]
 *
 * [event]
 *
 */

const MonthCalendar = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const [data, setData] = useState([]);
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [date, setDate] = useState(props.date || format(new Date(), dateFormat));

	const getData = () => {
		let array = [];

		while (array.length < 12) {
			array.push(array.length + 1);
		}

		return array;
	};

	const handleClick = (item) => {
		setDate(format(set(rawDate(date), { month: item - 1 }), dateFormat));
		props.onChange && props.onChange(item - 1);
	};

	useEffect(() => {
		setData(getData());
	}, []);

	useEffect(() => {
		if (typeof props.date === 'string') {
			setDate(props.date);
		}
	}, [props.date]);

	return (
		<div
			ref={ref}
			className={`${baseClassName}-month`}
		>
			{
				data.map((item, index) => {
					const selected = item === getMonth(rawDate(date)) + 1;

					return (
						<button
							key={index}
							type="button"
							className={classnames(`${baseClassName}-button`, {selected})}
							onClick={() => handleClick(item)}
						>
							<span
								className={`${baseClassName}-label`}
							>
								{`${item}월`}
							</span>
						</button>
					)
				})
			}
		</div>
	);
};

/**
 * <DateCalendar>
 * [props]
 *
 * [event]
 *
 */

const DateCalendar = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [date, setDate] = useState(props.date || format(new Date(), dateFormat));
	const [data, setData] = useState([]);
	const weeks = ['일', '월', '화', '수', '목', '금', '토'];
	const today = format(new Date(), dateFormat);

	const getData = ({ year, month }) => {
		let date = new Date(year, month, 1);
		let prev = sub(date, { days: 1 });
		let next = add(date, { months: 1 });
		let array = [];

		do {
			array.push({
				year: getYear(date),
				month: getMonth(date) + 1,
				date: getDate(date),
				week: getDay(date),
			});

			date = add(date, { days: 1 });
		}
		while (month === getMonth(date));

		while(array[0].week !== 0) {
			array.unshift({
				year: getYear(prev),
				month: getMonth(prev) + 1,
				date: getDate(prev),
				week: getDay(prev),
			});

			prev = sub(prev, { days: 1 });
		}

		do {
			array.push({
				year: getYear(next),
				month: getMonth(next) + 1,
				date: getDate(next),
				week: getDay(next),
			});

			next = add(next, { days: 1 });
		}
		while(array[array.length-1].week !== 6 || array.length < 7 * 6);

		return array;
	}

	const handleClick = (item) => {
		setDate(format(set(rawDate(date), { date: item.date }), dateFormat));
		props.onChange && props.onChange(item.date);
	};

	useEffect(() => {
		setData(getData({
			year: getYear(rawDate(date)),
			month: getMonth(rawDate(date)),
		}));
	}, [date]);

	useEffect(() => {
		if (typeof props.date === 'string') {
			setDate(props.date);
		}
	}, [props.date]);

	return (
		<div
			ref={ref}
			className={`${baseClassName}-date`}
		>
			{
				weeks.map((item, index) => {
					return (
						<span
							key={index}
							className={`${baseClassName}-week`}
						>
							{item}
						</span>
					)
				})
			}
			{
				data.map((item, index) => {
					const itemDate = new Date(item.year, item.month - 1, item.date);
					const disabled =
						item.month !== getMonth(rawDate(date)) + 1 ||
						props.disables?.filter(item => isEqual(rawDate(item), itemDate))[0];
					const selected = isEqual(rawDate(date), itemDate);
					const isToday = isEqual(rawDate(today), itemDate);
					const icons = props.icons?.filter(item => isEqual(rawDate(item.date), itemDate))[0]?.icons;

					return (
						<button
							key={index}
							type="button"
							className={classnames(`${baseClassName}-button`, {
								disabled,
								selected,
								today: isToday,
								icons: props.icons
							})}
							disabled={disabled}
							onClick={() => handleClick(item)}
						>
							<span
								className={classnames(`${baseClassName}-label`)}
							>
								{item.date}
							</span>
							<span
								className={classnames(`${baseClassName}-icons`)}
							>
								{icons?.map((item, index) => {
									if (index < 2) {
										return (
											<UxIcon
												key={index}
												className={item}
											/>
										)
									}
								})}
							</span>
						</button>
					)
				})
			}
		</div>
	);
};

/**
 * <Calendar>
 * [props]
 *
 * [event]
 *
 */

const Calendar = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const caseClassName = props.caseClassName;
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [date, setDate] = useState(props.date || format(new Date(), dateFormat));
	const [isYear, setIsYear] = useState(false);
	const [isMonth, setIsMonth] = useState(false);

	const handlePrev = () => {
		setDate(format(sub(rawDate(date), { months: 1 }), dateFormat));
	};

	const handleNext = () => {
		setDate(format(add(rawDate(date), { months: 1 }), dateFormat));
	};

	const handleYear = () => {
		setIsYear(!isYear);
		setIsMonth(false);
	};

	const handleMonth = () => {
		setIsMonth(!isMonth);
		setIsYear(false);
	};

	const handleDateChange = (value) => {
		setDate(format(set(rawDate(date), { date: value }), dateFormat));
		props.onDateChange && props.onDateChange(value);
	};

	const handleMonthChange = (value) => {
		setDate(format(set(rawDate(date), { month: value}), dateFormat));
		props.onMonthChange && props.onMonthChange(value);
	};

	const handleYearChange = (value) => {
		setDate(format(set(rawDate(date), { year: value }), dateFormat));
		props.onYearChange && props.onYearChange(value);
	};

	useEffect(() => {
		setIsYear(false);
		setIsMonth(false);
		props.onChange && props.onChange(format(rawDate(date), dateFormat));
	}, [date]);

	return (
		<div
			ref={ref}
			className={caseClassName}
		>
			<div className={`${baseClassName}-base`}>
				<div className={`${baseClassName}-header`}>
					<button
						type="button"
						className={classnames(`${baseClassName}-prev`)}
						onClick={handlePrev}
					>
						<UxIcon className="i004" />
					</button>
					<button
						type="button"
						className={classnames(`${baseClassName}-select`)}
						onClick={handleYear}
					>
						<span>{`${getYear(rawDate(date))}년`}</span>
						<UxIcon className={ isYear ? 'i001' : 'i002' } />
					</button>
					<button
						type="button"
						className={classnames(`${baseClassName}-select`)}
						onClick={handleMonth}
					>
						<span>{`${getMonth(rawDate(date)) + 1}월`}</span>
						<UxIcon className={ isMonth ? 'i001' : 'i002' } />
					</button>
					<button
						type="button"
						className={classnames(`${baseClassName}-next`)}
						onClick={handleNext}
					>
						<UxIcon className="i003" />
					</button>
				</div>
				<div className={`${baseClassName}-content`}>
					{
						!isYear && !isMonth &&
						<DateCalendar
							{...props}
							date={date}
							onChange={handleDateChange}
						/>
					}
					{
						isYear &&
						<YearCalendar
							{...props}
							date={date}
							onChange={handleYearChange}
						/>
					}
					{
						isMonth &&
						<MonthCalendar
							{...props}
							date={date}
							onChange={handleMonthChange}
						/>
					}
				</div>
			</div>
		</div>
	);
};

/**
 * <Calendar>
 * [props]
 *
 * [event]
 *
 */

const UxCalendar = ({ ref, ...props }) => {
	const baseClassName = 'ux-calendar';
	const caseClassName = classnames(baseClassName, props.className, {
		default: !props.role,
		[`${props.role}`]: props.role,
	});

	const getSlot = () => {
		Object.assign(props, {
			baseClassName,
			caseClassName,
		});

		switch (props.role) {
			case 'date':
				return <DateCalendar {...props} />;
			case 'month':
				return <MonthCalendar {...props} />;
			case 'year':
				return <YearCalendar {...props} />;
			default:
				return <Calendar {...props} />;
		}
	};

	return getSlot();
};

export default UxCalendar;