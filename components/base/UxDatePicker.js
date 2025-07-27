"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from '@/components/base/UxInput';
import UxIcon from '@/components/base/UxIcon';
import UxCalendar from '@/components/base/UxCalendar';
import UxButton from '@/components/base/UxButton';

/**
 * <UxDatePickerPopup>
 * [props]
 *
 * [event]
 *
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
 *
 * [event]
 *
 */

const UxDatePicker = ({ ref, ...props }) => {
	const baseClassName = 'ux-datepicker';
	const caseClassName = classnames(baseClassName, props.className);
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');

	const handleClick = async () => {
		const result = await modal.bottom(UxDatePickerPopup, { value });
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
		<div className={caseClassName}>
			<UxInput
				placeholder={props.placeholder || 'YYYY.MM.DD'}
				value={value}
				valid={props.valid}
				disabled={props.disabled}
			>
				<UxButton onClick={handleClick} disabled={props.disabled}>
					<UxIcon className="i237 w20" />
				</UxButton>
			</UxInput>
		</div>
	)
};

export default UxDatePicker;