"use client";

import React, { useState, useEffect } from 'react';
import { format, set, getMonth, getYear } from "date-fns";
import useModal from "@/hook/useModal";
import classnames from 'classnames';
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from '@/components/base/UxInput';
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';
import UxCalendar from '@/components/base/UxCalendar';

/**
 * <Popup>
 * [props]
 * [event]
 */

const Popup = ({ ref, ...props }) => {
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [date, setDate] = useState();
	const [value, setValue] = useState(props.value);

	const handleClose = () => {
		props.onClose({ value });
	};

	const handleChange = (value) => {
		switch (props.role) {
			case 'month':
				setValue(value + 1);
				break;
			case 'year':
				setValue(value);
				break;
			default:
				setValue(value);
		}
	};

	useEffect(() => {
		switch (props.role) {
			case 'month':
				setDate(format(set(new Date(), { month: value - 1 }), dateFormat));
				break;
			case 'year':
				setDate(format(set(new Date(), { year: value }), dateFormat));
				break;
			default:
				setDate(value);
		}
	}, [value]);

	useEffect(() => {
		switch (props.role) {
			case 'month':
				setValue(value || getMonth(new Date()) + 1);
				break;
			case 'year':
				setValue(value || getYear(new Date()));
				break;
			default:
				setValue(value || format(new Date(), dateFormat));
		}
	}, []);

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
						<UxCalendar
							role={props.role}
							date={date}
							scrollIntoView
							onChange={handleChange}
						/>
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
 * <UxDatePicker>
 * [props]
 * role(String): 유형 ('month', 'year')
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxDatePicker = ({ ref, ...props }) => {
	const modal = useModal();
	const [placeholder, setPlaceholder] = useState(props.placeholder);
	const [value, setValue] = useState(props.value || '');
	const [suffix, setSuffix] = useState();

	const handleClick = async () => {
		props.onClick && props.onClick();

		const result = await modal.bottom(Popup, {
			...props,
			value,
		});

		result.value && setValue(String(result.value));
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
			case 'month':
				setPlaceholder(placeholder || '선택하세요');
				setSuffix('월');
				break;
			case 'year':
				setPlaceholder(placeholder || '선택하세요');
				setSuffix('년');
				break;
			default:
				setPlaceholder(placeholder || 'YYYY.MM.DD');
		}
	}, [props.role]);

	return (
		<>
			{
				!props.role &&
				<UxInput
					className={props.className}
					placeholder={placeholder}
					value={value}
					valid={props.valid}
					readonly={props.readonly}
					disabled={props.disabled}
				>
					<UxButton
						disabled={props.readonly || props.disabled}
						onClick={handleClick}
					>
						<UxIcon className="i160" />
					</UxButton>
				</UxInput>
			}
			{
				props.role &&
				<UxButton
					role="input"
					placeholder={placeholder}
					value={value && `${value}${suffix}`}
					valid={props.valid}
					readonly={props.readonly}
					disabled={props.disabled}
					onClick={handleClick}
				>
					<UxIcon className={classnames('right', 'i160')} />
				</UxButton>
			}
		</>
	)
};

export default UxDatePicker;