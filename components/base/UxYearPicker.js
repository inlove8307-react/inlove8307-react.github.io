"use client";

import React, { useState, useRef, useEffect } from 'react';
import { format, set, getYear } from "date-fns";
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
import UxYearCalendar from '@/components/base/UxYearCalendar';


/**
 * <UxYearPickerPopup>
 * [props]
 *
 * [event]
 *
 */

const UxYearPickerPopup = ({ ref, ...props }) => {
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [year, setYear] = useState(props.value || getYear(new Date()));
	const [date] = useState(format(set(new Date(), { year: year }), dateFormat));

	const handleChange = (value) => {
		setYear(value);
	};

	const handleClose = () => {
		props.onClose({ value : year });
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
						<UxYearCalendar
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
 * <UxYearPicker>
 * [props]
 *
 * [event]
 *
 */

const UxYearPicker = ({ ref, ...props }) => {
	const baseClassName = 'ux-input-group';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');

	const handleClick = async () => {
		const result = await modal.bottom(UxYearPickerPopup, { value: Number(value) });
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

	return (
		<div className={caseClassName}>
			<UxInput
				className="last"
				placeholder={props.placeholder || '선택'}
				value={value && `${value}년`}
				valid={props.valid}
				disabled={props.disabled}
			>
				<UxButton
					disabled={props.disabled}
					onClick={handleClick}
				>
					<UxIcon className="i160" />
				</UxButton>
			</UxInput>
		</div>
	)
};

export default UxYearPicker;