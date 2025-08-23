"use client";

import React, { useEffect, useState, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { getDate, endOfMonth } from 'date-fns';
import classnames from 'classnames';
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from '@/components/base/UxInput';
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';
import UxGroup from "@/components/base/UxGroup";

/**
 * <DateRole>
 * [props]
 * [event]
 */

const DateRole = ({ ref, ...props }) => {
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
 * <TimeRole>
 * [props]
 * [event]
 */

const TimeRole = ({ ref, ...props }) => {
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
				max={23}
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
 * [event]
 */

const Picker = ({ ref, ...props }) => {
	const baseClassName = 'ux-picker';
	const caseClassName = classnames(baseClassName, props.className);
	const [min, setMin] = useState(Number(props.min));
	const [max, setMax] = useState(Number(props.max));
	const [data, setData] = useState([]);
	const [value, setValue] = useState(0);
	const listRef = useRef();

	const getData = () => {
		let result = [min];

		do {
			result.push(result[result.length - 1] + 1);
		}
		while (result[result.length - 1] < max);

		return result;
	};

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
			setValue(entry.target.dataset.value);
		}
		else {
			entry.target.classList.remove('active');
		}
	};

	useEffect(() => {
		min && max && setData(getData());
	}, [min, max]);

	useEffect(() => {
		setData(getData());
	}, [min, max]);

	useEffect(() => {
		setMin(Number(props.min));
	}, [props.min]);

	useEffect(() => {
		setMax(Number(props.max));
	}, [props.max]);

	useEffect(() => {
		props.data && setData(props.data);
	}, [props.data]);

	useEffect(() => {
		props.onChange && props.onChange(String(value));
	}, [value]);

	return (
		<div className={caseClassName}>
			<ul
				ref={listRef}
				className={`${baseClassName}-list`}
			>
				{data?.map((item, index) => (
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
 * <Popup>
 * [props]
 * [event]
 */

const Popup = ({ ref, ...props }) => {
	const [value, setValue] = useState(props.value || '');

	const handleChange = (value) => {
		setValue(value);
	};

	const handleClose = () => {
		props.onClose({ value });
	};

	const getSlot = () => {
		Object.assign(props, {
			onChange: handleChange,
		});

		switch (props.role) {
			case 'date':
				return <DateRole {...props} />;
			case 'time':
				return <TimeRole {...props} />;
			default:
				return <Picker {...props} />;
		};
	};

	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxContent>
						<h4>{props.title || '선택'}</h4>
						<UxButton onClick={props.onClose}>
							<UxIcon className="i303 w28" />
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle>
					<UxContent>
						{getSlot(props.role)}
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						<UxButton
							className="primary h3"
							onClick={handleClose}
						>
							<span className="text">확인</span>
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	);
};

/**
 * <UxPicker>
 * [props]
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxPicker = ({ ref, ...props }) => {
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');
	const [icon, setIcon] = useState('');
	const [placeholder, setPlaceholder] = useState('');
	const [active, setActive] = useState(false);

	const handleClick = async () => {
		props.onClick && props.onClick();
		setActive(true);

		const result = await modal.bottom(Popup, {
			...props,
			value,
		});

		result.value && setValue(result.value);
		setActive(false);
	};

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	useEffect(() => {
		switch (props.role) {
			case 'date':
				setPlaceholder('YYYY.MM.DD');
				setIcon('i160');
				break;
			case 'time':
				setPlaceholder('HH:MM:SS');
				setIcon('i219');
				break;
		}
	}, [props.role]);

	return (
		<>
			{
				props.role &&
				<UxInput
					className={props.className}
					placeholder={props.placeholder || placeholder}
					value={value}
					valid={props.valid}
					readonly={props.readonly}
					disabled={props.disabled}
				>
					<UxButton
						disabled={props.readonly || props.disabled}
						onClick={handleClick}
					>
						{icon && <UxIcon className={icon} />}
					</UxButton>
				</UxInput>
			}
			{
				!props.role &&
				<UxButton
					role="select"
					placeholder={placeholder}
					active={active}
					valid={props.valid}
					readonly={props.readonly}
					disabled={props.disabled}
					onClick={handleClick}
				>
					{value}
				</UxButton>
			}
		</>
	)
};

export default UxPicker;