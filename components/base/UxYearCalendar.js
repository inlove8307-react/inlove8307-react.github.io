import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { rawDate } from '@/utils/core';
import { format, set, getYear } from "date-fns";

const UxYearCalendar = ({ ref, ...props }) => {
	const originClassName = 'ux-calendar';
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
			className={`${originClassName}-year`}
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
							className={classnames(`${originClassName}-button`, {selected})}
							style={{width: `${100 / col}%`}}
							onClick={() => handleClick(item)}
						>
							<span
								className={`${originClassName}-label`}
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

export default UxYearCalendar;