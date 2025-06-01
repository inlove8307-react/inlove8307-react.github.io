import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { format, add, sub, isEqual, getDay, getDate, getMonth, getYear } from "date-fns";

const UxDateCalendar = (props, ref) => {
	const originClassName = 'ux-calendar';
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [date, setDate] = useState(props.date || format(new Date(), dateFormat));
	const [data, setData] = useState([]);
	const weeks = ['일', '월', '화', '수', '목', '금', '토'];
	const today = format(new Date(), dateFormat);

	const getData = ({ year, month }) => {
		let date = new Date([year, month + 1, 1]);
		let prev = sub(date, { days: 1 });
		let next = add(date, { months: 1 });
		let array = [];

		do {
			array.push({
				year: getYear(date),
				month: getMonth(date),
				date: getDate(date),
				week: getDay(date),
			});

			date = add(date, { days: 1 });
		}
		while (month === getMonth(date));

		while(array[0].week !== 0) {
			array.unshift({
				year: getYear(prev),
				month: getMonth(prev),
				date: getDate(prev),
				week: getDay(prev),
			});

			prev = sub(prev, { days: 1 });
		}

		do {
			array.push({
				year: getYear(next),
				month: getMonth(next),
				date: getDate(next),
				week: getDay(next),
			});

			next = add(next, { days: 1 });
		}
		while(array[array.length-1].week !== 6 || array.length < 7 * 6);

		return array;
	}

	const handleClick = (item) => {
		props.onChange && props.onChange(item.date);
	};

	useEffect(() => {
		setData(getData({
			year: getYear(date),
			month: getMonth(date),
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
					const disabled = item.month !== getMonth(date);
					const selected = isEqual(date, new Date(item.year, item.month, item.date));
					const isToday = isEqual(today, new Date(item.year, item.month, item.date));

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