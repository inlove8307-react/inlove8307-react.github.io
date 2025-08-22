"use client";

import React, { useEffect, useState, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { getDate, endOfMonth } from 'date-fns';
import classnames from 'classnames';
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";

/**
 * <RoleDate>
 * [props]
 *
 * [event]
 *
 */

const RoleDate = ({ ref, ...props }) => {
	const [year, setYear] = useState(0);
	const [month, setMonth] = useState(0);
	const [date, setDate] = useState(0);
	const [last, setLast] = useState(0);

	const handleYear = (value) => {
		setYear(value);
		setLast(getDate(endOfMonth(new Date(value, month - 1, date))));
	};

	const handleMonth = (value) => {
		setMonth(value);
		setLast(getDate(endOfMonth(new Date(year, value - 1, date))));
	};

	const handleDate = (value) => {
		setDate(value);
		setLast(getDate(endOfMonth(new Date(year, month - 1, value))));
	};

	useEffect(() => {
		props.onChange && props.onChange([
			String(year).padStart(4, '0'),
			String(month).padStart(2, '0'),
			String(date).padStart(2, '0'),
		].join('.'));
	}, [year, month, date]);

	return (
		<UxGroup className="gap16 col3">
			<Picker
				{...props}
				min={props.min}
				max={props.max}
				suffix="년"
				onChange={handleYear}
			/>
			<Picker
				{...props}
				min={1}
				max={12}
				pad={2}
				suffix="월"
				onChange={handleMonth}
			/>
			<Picker
				{...props}
				min={1}
				max={last}
				pad={2}
				suffix="일"
				onChange={handleDate}
			/>
		</UxGroup>
	);
};

/**
 * <RoleTime>
 * [props]
 *
 * [event]
 *
 */

const RoleTime = ({ ref, ...props }) => {
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);

	const handleHour = (value) => {
		setHour(value);
	};

	const handleMinute = (value) => {
		setMinute(value);
	};

	const handleSecond = (value) => {
		setSecond(value);
	};

	useEffect(() => {
		props.onChange && props.onChange([
			String(hour).padStart(2, '0'),
			String(minute).padStart(2, '0'),
			String(second).padStart(2, '0'),
		].join(':'));
	}, [hour, minute, second]);

	return (
		<UxGroup className="gap16 col3">
			<Picker
				{...props}
				min={0}
				max={24}
				pad={2}
				suffix="시"
				onChange={handleHour}
			/>
			<Picker
				{...props}
				min={0}
				max={59}
				pad={2}
				suffix="분"
				onChange={handleMinute}
			/>
			<Picker
				{...props}
				min={0}
				max={59}
				pad={2}
				suffix="초"
				onChange={handleSecond}
			/>
		</UxGroup>
	);
};

/**
 * <Picker>
 * [props]
 *
 * [event]
 *
 */

const Picker = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const caseClassName = props.caseClassName;
	const [min, setMin] = useState(Number(props.min));
	const [max, setMax] = useState(Number(props.max));
	const [data, setData] = useState([]);
	const [value, setValue] = useState(0);
	const listRef = useRef();

	const handleClick = (event) => {
		event.target.scrollIntoView({
			block: 'center',
			inline: 'nearest',
			behavior: 'smooth',
		});
	};

	const handleChange = (inView, entry) => {
		if (inView) {
			entry.target.classList.add('active');
			setValue(Number(entry.target.dataset.value));
		}
		else {
			entry.target.classList.remove('active');
		}
	};

	useEffect(() => {
		let data = [min];

		do {
			data.push(data[data.length - 1] + 1);
		}
		while (data[data.length - 1] < max);

		setData(data);
	}, [min, max]);

	useEffect(() => {
		setMin(Number(props.min));
	}, [props.min]);

	useEffect(() => {
		setMax(Number(props.max));
	}, [props.max]);

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	return (
		<div className={caseClassName}>
			<ul
				ref={listRef}
				className={`${baseClassName}-list`}
			>
				{data.map((item, index) => (
					<InView
						key={index}
						root={listRef.current}
						rootMargin="-120px 0px"
						as="li"
						className={`${baseClassName}-item`}
						data-value={item}
						onChange={handleChange}
					>
						<button
							type="button"
							className={`${baseClassName}-button`}
							onClick={handleClick}
						>
							<span className="text">
								{String(item).padStart(props.pad, '0')}
								{props.suffix && props.suffix}
							</span>
						</button>
					</InView>
				))}
			</ul>
		</div>
	)
};

/**
 * <UxPicker>
 * [props]
 *
 * [event]
 *
 */

const UxPicker = ({ ref, ...props }) => {
	const baseClassName = 'ux-picker';
	const caseClassName = classnames(baseClassName, props.className);

	const getSlot = () => {
		Object.assign(props, {
			baseClassName,
			caseClassName,
			onChange: props.onChange,
		});

		switch (props.role) {
			case 'date':
				return <RoleDate {...props} />;
			case 'time':
				return <RoleTime {...props} />;
			default:
				return <Picker {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxPicker;