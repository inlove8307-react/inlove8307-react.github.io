"use client";

import React, { useState, useEffect } from 'react';
import { getRandomChar } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';

/**
 * <UxInput>
 * [props]
 * type(String): 입력 타입 (기본 'text')
 * style(Object): 인라인 스타일
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * prefix(String): 앞 표시 문구
 * suffix(String): 뒤 표시 문구
 * value(String): 값
 * maxLength(String): 글자 수 제한
 * clear(Boolean): 값 초기화 버튼 활성화 여부
 * submit(String): 확인 버튼 문구
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onInput(Func): 값 입력 이벤트 콜백
 * onFocus(Func): 포커스 활성화 이벤트 콜백
 * onBlur(Func): 포커스 비활성화 이벤트 콜백
 * onKeyDown(Func): 키 입력 이벤트 콜백
 * onKeyUp(Func): 키 입력 후 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 * onSubmit(Func): 확인 버튼 이벤트 콜백
 */

const UxInput = ({ ref, ...props }) => {
	const baseClassName = 'ux-input';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');

	const handleInput = (event) => {
		props.onInput && props.onInput(event);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	};

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	};

	const handleKeyDown = (event) => {
		props.onKeyDown && props.onKeyDown(event);
	};

	const handleKeyUp = (event) => {
		props.onKeyUp && props.onKeyUp(event);
	};

	const handleClear = (event) => {
		setValue('');
		props.onClear && props.onClear(event);
	};

	const handleSubmit = (event) => {
		props.onSubmit && props.onSubmit(event);
	}

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
			<span className={`${baseClassName}-prefix`}>
				{props.prefix}
			</span>
			<input
				type={props.type || 'text'}
				className={`${baseClassName}-base`}
				placeholder={props.placeholder}
				value={value}
				maxLength={props.maxLength}
				readOnly={props.readonly}
				disabled={props.disabled}
				onInput={handleInput}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
			/>
			{props.children}
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxIcon
					title="initialize"
					tagName="button"
					className="i110"
					onClick={handleClear}
				/>
			}
			<span className={`${baseClassName}-suffix`}>
				{props.suffix}
			</span>
			<span className={`${baseClassName}-timer`}>
				{props.timer}
			</span>
			{
				props.submit && !props.readonly && !props.disabled &&
				<UxButton
					className="submit"
					onClick={handleSubmit}
				>
					{props.submit}
				</UxButton>
			}
		</div>
	)
};

export default UxInput;