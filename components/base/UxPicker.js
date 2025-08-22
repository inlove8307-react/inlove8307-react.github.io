"use client";

import React, { useEffect, useState, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import classnames from 'classnames';

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
	const [min] = useState(Number(props.min));
	const [max] = useState(Number(props.max));
	const [data, setData] = useState([]);
	const [value, setValue] = useState(0);
	const listRef = useRef();

	const handleClick = (event) => {
		event.target.scrollIntoView({
			block: "center",
			inline: "nearest",
			behavior: "smooth",
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
	}, []);

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
								{item}
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
 * <Date>
 * [props]
 *
 * [event]
 *
 */

const Date = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const [year, setYear] = useState(0);
	const [month, setMonth] = useState(0);
	const [date, setDate] = useState(0);

	const handleYear = (value) => {
		setYear(value);
	};

	const handleMonth = (value) => {
		setMonth(value);
	};

	const handleDate = (value) => {
		setDate(value);
	};

	useEffect(() => {
		props.onChange && props.onChange([year, month, date]);
	}, [year, month, date]);

	return (
		<div className={`${baseClassName}-date`}>
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
				suffix="월"
				onChange={handleMonth}
			/>
			<Picker
				{...props}
				min={1}
				max={31}
				suffix="일"
				onChange={handleDate}
			/>
		</div>
	);
};

/**
 * <Time>
 * [props]
 *
 * [event]
 *
 */

const Time = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
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
		props.onChange && props.onChange([hour, minute, second]);
	}, [hour, minute, second]);

	return (
		<div className={`${baseClassName}-time`}>
			<Picker
				{...props}
				min={0}
				max={24}
				suffix="시"
				onChange={handleHour}
			/>
			<Picker
				{...props}
				min={0}
				max={60}
				suffix="분"
				onChange={handleMinute}
			/>
			<Picker
				{...props}
				min={0}
				max={60}
				suffix="초"
				onChange={handleSecond}
			/>
		</div>
	);
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
				return <Date {...props} />;
			case 'time':
				return <Time {...props} />;
			default:
				return <Picker {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxPicker;