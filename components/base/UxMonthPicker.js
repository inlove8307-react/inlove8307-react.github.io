"use client";

import React, { useState, useEffect } from 'react';
import { format, set, getMonth } from "date-fns";
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
import UxGroup from '@/components/base/UxGroup';
import UxMonthCalendar from '@/components/base/UxMonthCalendar';

/**
 * <Popup>
 * [props]
 * [event]
 */

const Popup = ({ ref, ...props }) => {
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [month, setMonth] = useState(props.value || getMonth(new Date()) + 1);
	const [date] = useState(format(set(new Date(), { month: month - 1 }), dateFormat));

	const handleChange = (value) => {
		setMonth(value + 1);
	};

	const handleClose = () => {
		props.onClose({ value : month });
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
						<UxMonthCalendar
							date={date}
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
 * <UxMonthPicker>
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

const UxMonthPicker = ({ ref, ...props }) => {
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');

	const handleClick = async () => {
		props.onClick && props.onClick();

		const result = await modal.bottom(Popup, { value: Number(value) });
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
		<UxButton
			role="input"
			placeholder={props.placeholder || '선택해주세요'}
			value={value && `${value}월`}
			valid={props.valid}
			readonly={props.readonly}
			disabled={props.disabled}
			onClick={handleClick}
		>
			<UxIcon className={classnames('right', 'i160')} />
		</UxButton>
	)
};

export default UxMonthPicker;