"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { rawDate } from '@/utils/core';
import { format, set, add, sub, getMonth, getYear } from "date-fns";
/* COMPONENT */
import UxDateCalendar from "@/components/base/UxDateCalendar";
import UxMonthCalendar from "@/components/base/UxMonthCalendar";
import UxYearCalendar from "@/components/base/UxYearCalendar";
/* COMPONENT */
import UxIcon from "@/components/base/UxIcon";

/**
 * <UxCalendar>
 * [props]
 *
 * [event]
 *
 */

const UxCalendar = ({ ref, ...props }) => {
	const originClassName = 'ux-calendar';
	const mixinClassName = classnames(originClassName, props.className);
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
			className={mixinClassName}
		>
			<div className={`${originClassName}-base`}>
				<div className={`${originClassName}-header`}>
					<button
						type="button"
						className={classnames(`${originClassName}-prev`)}
						onClick={handlePrev}
					>
						<UxIcon className="i004" />
					</button>
					<button
						type="button"
						className={classnames(`${originClassName}-select`)}
						onClick={handleYear}
					>
						<span>{`${getYear(rawDate(date))}년`}</span>
						<UxIcon className={ isYear ? 'i001' : 'i002' } />
					</button>
					<button
						type="button"
						className={classnames(`${originClassName}-select`)}
						onClick={handleMonth}
					>
						<span>{`${getMonth(rawDate(date)) + 1}월`}</span>
						<UxIcon className={ isMonth ? 'i001' : 'i002' } />
					</button>
					<button
						type="button"
						className={classnames(`${originClassName}-next`)}
						onClick={handleNext}
					>
						<UxIcon className="i003" />
					</button>
				</div>
				<div className={`${originClassName}-content`}>
					{
						!isYear && !isMonth &&
						<UxDateCalendar
							{...props}
							date={date}
							onChange={handleDateChange}
						/>
					}
					{
						isYear &&
						<UxYearCalendar
							{...props}
							date={date}
							onChange={handleYearChange}
						/>
					}
					{
						isMonth &&
						<UxMonthCalendar
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

export default UxCalendar;