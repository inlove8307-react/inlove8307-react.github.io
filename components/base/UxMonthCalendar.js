"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { rawDate } from '@/utils/core';
import { format, set, getMonth } from "date-fns";

/**
 * <UxMonthCalendar>
 * [props]
 *
 * [event]
 *
 */

const UxMonthCalendar = ({ ref, ...props }) => {
	const originClassName = 'ux-calendar';
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
			className={`${originClassName}-month`}
		>
			{
				data.map((item, index) => {
					const selected = item === getMonth(rawDate(date)) + 1;

					return (
						<button
							key={index}
							type="button"
							className={classnames(`${originClassName}-button`, {selected})}
							onClick={() => handleClick(item)}
						>
							<span
								className={`${originClassName}-label`}
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

export default UxMonthCalendar;