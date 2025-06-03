import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { rawDate } from '@/utils/core';
import { format, set, add, sub, isEqual, getDay, getDate, getMonth, getYear } from "date-fns";

const UxDateCalendar = (props, ref) => {
	const originClassName = 'ux-calendar';
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
			className={`${originClassName}-date`}
		>
			{
				weeks.map((item, index) => {
					return (
						<span
							key={index}
							className={`${originClassName}-week`}
						>
							{item}
						</span>
					)
				})
			}
			{
				data.map((item, index) => {
					const disabled = item.month !== getMonth(rawDate(date)) + 1;
					const selected = isEqual(rawDate(date), new Date(item.year, item.month - 1, item.date));
					const isToday = isEqual(rawDate(today), new Date(item.year, item.month - 1, item.date));

					return (
						<button
							key={index}
							type="button"
							className={classnames(`${originClassName}-button`, {
								disabled,
								selected,
								today: isToday
							})}
							disabled={disabled}
							onClick={() => handleClick(item)}
						>
							<span
								className={classnames(`${originClassName}-label`)}
							>
								{item.date}
							</span>
						</button>
					)
				})
			}
		</div>
	);
};

export default React.forwardRef(UxDateCalendar);