"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
import UxMasking from '@/components/base/UxMasking';

/**
 * <UxPassword>
 * [props]
 * style(Object): 인라인 스타일
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * maxLength(String): 글자 수 제한
 * scrollIntoView(Boolean): 값 입력 시 스크롤 여부
 * clear(Boolean): 값 초기화 버튼 활성화 여부
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 */

const UxPassword = ({ ref, ...props }) => {
	const baseClassName = 'ux-password';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleClear = (event) => {
		setValue('');
		props.onClear && props.onClear(event);
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
		<div
			ref={ref}
			className={caseClassName}
			style={props.style}
		>
			<UxMasking
				placeholder={props.placeholder}
				value={value}
				maxLength={props.maxLength}
				readonly={props.readonly}
				disabled={props.disabled}
				scrollIntoView={props.scrollIntoView}
				onChange={handleChange}
			/>
			{
				props.clear && value && !props.readonly && !props.disabled &&
				 <UxIcon
					title="initialize"
					tagName="button"
					className="i110"
					onClick={handleClear}
				/>
			}
		</div>
	);
};

export default UxPassword;