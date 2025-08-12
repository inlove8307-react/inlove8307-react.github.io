"use client";

import React, { useState, useEffect } from 'react';
import { rawDate } from '@/utils/core';
import { format, set, getMonth } from "date-fns";
import classnames from 'classnames';

/**
 * <UxMonthCalendar>
 * [props]
 *
 * [event]
 *
 */

const UxMonthCalendar = ({ ref, ...props }) => {
	const baseClassName = 'ux-calendar';
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

export default UxMonthCalendar;