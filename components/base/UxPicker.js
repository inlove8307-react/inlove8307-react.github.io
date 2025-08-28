"use client";

import React, { useEffect, useState, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { getDate, endOfMonth, add } from 'date-fns';
import classnames from 'classnames';
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
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
	const [isYear, setIsYear] = useState(false);
	const [isMonth, setIsMonth] = useState(false);
	const [isDate, setIsDate] = useState(false);
	const [data, setData] = useState([]);

	const getData = () => {
		let date = new Date(year, month - 1, 1);
		let last = getDate(endOfMonth(date));
		let result = [];

		do {
			result.push(getDate(date));
			date = add(date, { days: 1 });
		}
		while (result[result.length - 1] < last);

		return result;
	};

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
		setData(getData());
	}, [year, month]);

	useEffect(() => {
		let result = [];

		if (props.optional) {
			isYear && result.push(`${String(year).padStart(2, '0')}년`);
			isMonth && result.push(`${String(month).padStart(2, '0')}월`);
			isDate && result.push(`${String(date).padStart(2, '0')}일`);
			props.onChange && props.onChange(result.join(' '));
		}
		else {
			result.push(String(year).padStart(4, '0'));
			result.push(String(month).padStart(2, '0'));
			result.push(String(date).padStart(2, '0'));
			props.onChange && props.onChange(result.join('.'));
		}
	}, [year, month, date]);

	useEffect(() => {
		(!props.optional || props.optional?.includes('year')) && setIsYear(true);
		(!props.optional || props.optional?.includes('month')) && setIsMonth(true);
		(!props.optional || props.optional?.includes('date')) && setIsDate(true);
	}, [props.optional]);


	return (
		<UxGroup className={classnames('gap16', {
			col3: !props.optional,
			[`col${props.optional?.length}`]: props.optional,
		})}>
			{
				isYear &&
				<Picker
					{...props}
					min={props.min}
					max={props.max}
					suffix="년"
					onChange={handleYear}
				/>
			}
			{
				isMonth &&
				<Picker
					{...props}
					min={1}
					max={12}
					pad={2}
					suffix="월"
					onChange={handleMonth}
				/>
			}
			{
				isDate &&
				<Picker
					{...props}
					data={data}
					pad={2}
					suffix="일"
					onChange={handleDate}
				/>
			}
		</UxGroup>
	);
};

/**
 * <TimeRole>
 * [props]
 * [event]
 */

const TimeRole = ({ ref, ...props }) => {
	const [half, setHalf] = useState('');
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);
	const [isHalf, setIsHalf] = useState(false);
	const [isHour, setIsHour] = useState(false);
	const [isMinute, setIsMinute] = useState(false);
	const [isSecond, setIsSecond] = useState(false);

	const handleHalf = (value) => {
		setHalf(value);
	};

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
		let result = [];

		if (props.optional) {
			isHalf && result.push(half);
			isHour && result.push(`${String(hour).padStart(2, '0')}시`);
			isMinute && result.push(`${String(minute).padStart(2, '0')}분`);
			isSecond && result.push(`${String(second).padStart(2, '0')}초`);
			props.onChange && props.onChange(result.join(' '));
		}
		else {
			result.push(String(hour).padStart(2, '0'));
			result.push(String(minute).padStart(2, '0'));
			result.push(String(second).padStart(2, '0'));
			props.onChange && props.onChange(result.join(':'));
		}
	}, [half, hour, minute, second]);

	useEffect(() => {
		props.optional?.includes('half') && setIsHalf(true);
		(!props.optional || props.optional?.includes('hour')) && setIsHour(true);
		(!props.optional || props.optional?.includes('minute')) && setIsMinute(true);
		(!props.optional || props.optional?.includes('second')) && setIsSecond(true);
	}, [props.optional]);

	return (
		<UxGroup className={classnames('gap16', {
			col3: !props.optional,
			[`col${props.optional?.length}`]: props.optional,
		})}>
			{
				isHalf &&
				<Picker
					{...props}
					data={['AM', 'PM']}
					onChange={handleHalf}
				/>
			}
			{
				isHour &&
				<Picker
					{...props}
					min={0}
					max={half ? 12: 23}
					pad={2}
					suffix="시"
					onChange={handleHour}
				/>
			}
			{
				isMinute &&
				<Picker
					{...props}
					min={0}
					max={59}
					pad={2}
					suffix="분"
					onChange={handleMinute}
				/>
			}
			{
				isSecond &&
				<Picker
					{...props}
					min={0}
					max={59}
					pad={2}
					suffix="초"
					onChange={handleSecond}
				/>
			}
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

		if (isNaN(min) || isNaN(max)) return [];

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
 * role(String): 유형('date', 'time')
 * min(String): 선택 항목 최소값(data 있을 경우 사용 불가)
 * max(String): 선택 항목 최대값(data 있을 경우 사용 불가)
 * data(Array): 선택 항목 배열(min, max 있을 경우 사용 불가)
 * suffix(String): 선택 항목 뒤 문구
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
		if (!props.role) {
			active ? setIcon('i001') : setIcon('i002');
		}
	}, [active]);

	useEffect(() => {
		switch (props.role) {
			case 'date':
				setIcon('i160');
				break;
			case 'time':
				setIcon('i219');
				break;
		}
	}, [props.role]);

	return (
		<UxButton
			role="input"
			placeholder={props.placeholder || '선택해주세요'}
			value={value && props.suffix ? `${value}${props.suffix}` : value}
			valid={props.valid}
			readonly={props.readonly}
			disabled={props.disabled}
			onClick={handleClick}
		>
			<UxIcon className={classnames('right', icon)} />
		</UxButton>
	)
};

export default UxPicker;