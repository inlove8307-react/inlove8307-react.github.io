"use client";

import React, { useState, useEffect } from 'react';
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
import UxGroup from '@/components/base/UxGroup';
import UxCalendar from '@/components/base/UxCalendar';

/**
 * <UxDatePickerPopup>
 * [props]
 * [event]
 */

const UxDatePickerPopup = ({ ref, ...props }) => {
	const [value, setValue] = useState(props.value || '');

	const handleChange = (value) => {
		setValue(value);
	};

	const handleClose = () => {
		props.onClose({ value });
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
						<UxCalendar
							date={value}
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
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * from(Object): 시작일
 * to(Object): 종료일
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxDatePicker = ({ ref, ...props }) => {
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');
	const [fromValue, setFromValue] = useState(props.from?.value || '');
	const [toValue, setToValue] = useState(props.to?.value || '');

	const handleClick = async (role) => {
		props.onClick && props.onClick();

		const result = await modal.bottom(UxDatePickerPopup, {
			...getProps(role)
		});

		switch (role) {
			case 'once':
				result.value && setValue(result.value);
				break;
			case 'from':
				result.value && setFromValue(result.value);
				break;
			case 'to':
				result.value && setToValue(result.value);
				break;
		}
	};

	const getProps = (role) => {
		let object = {};

		switch (role) {
			case 'once':
				Object.assign(object, props);
				object.value = value;
				break;
			case 'from':
				Object.assign(object, props.from);
				object.value = fromValue;
				break;
			case 'to':
				Object.assign(object, props.to);
				object.value = toValue;
				break;
		}

		return object;
	};

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		props.onChange && props.onChange(fromValue, toValue);
	}, [fromValue, toValue]);

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	useEffect(() => {
		if (typeof props.from?.value === 'string') {
			setFromValue(props.from?.value);
		}
	}, [props.from?.value]);

	useEffect(() => {
		if (typeof props.to?.value === 'string') {
			setToValue(props.to?.value);
		}
	}, [props.to?.value]);

	return (
		<UxGroup
			role="input"
			className={classnames({
				valid: props.valid === true,
				invalid: props.valid === false,
				readonly: props.readonly,
				disabled: props.disabled
			})}
		>
			{
				!props.from && !props.to &&
				<UxInput
					className="last"
					placeholder={props.placeholder || 'YYYY.MM.DD'}
					value={value}
					valid={props.valid}
					disabled={props.disabled}
				>
					<UxButton
						disabled={props.disabled}
						onClick={() => handleClick('once')}
					>
						<UxIcon className="i160" />
					</UxButton>
				</UxInput>
			}
			{
				props.from && props.to &&
				<>
					<UxInput
						placeholder={props.from?.placeholder || 'YYYY.MM.DD'}
						value={fromValue}
						valid={props.valid || props.from?.valid}
						disabled={props.disabled || props.from?.disabled}
					>
						<UxButton
							disabled={props.disabled || props.from?.disabled}
							onClick={() => handleClick('from')}
						>
							<UxIcon className="i160" />
						</UxButton>
					</UxInput>
					<UxInput
						className="dash last"
						placeholder={props.to?.placeholder || 'YYYY.MM.DD'}
						value={toValue}
						valid={props.valid || props.to?.valid}
						disabled={props.disabled || props.to?.disabled}
					>
						<UxButton
							disabled={props.disabled || props.to?.disabled}
							onClick={() => handleClick('to')}
						>
							<UxIcon className="i160" />
						</UxButton>
					</UxInput>
				</>
			}
		</UxGroup>
	)
};

export default UxDatePicker;