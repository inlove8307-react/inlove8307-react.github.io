"use client";

import React, { useState, useEffect } from 'react';
import useModal from "@/hook/useModal";
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

	const handleClick = async () => {
		props.onClick && props.onClick();

		const result = await modal.bottom(UxDatePickerPopup, {
			...props,
			value,
		});

		result.value && setValue(result.value);
	};

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<UxInput
			className={props.className}
			placeholder={props.placeholder || 'YYYY.MM.DD'}
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
	)
};

export default UxDatePicker;