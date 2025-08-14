"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxTextarea>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * rows(String): 라인 수 (기본 '2')
 * value(String): 값
 * maxLength(String): 글자 수 제한
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onFocus(Func): 포커스 활성화 이벤트 콜백
 * onBlur(Func): 포커스 비활성화 이벤트 콜백
 * onKeyDown(Func): 키 입력 이벤트 콜백
 * onKeyUp(Func): 키 입력 후 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxTextarea = ({ ref, ...props }) => {
	const baseClassName = "ux-textarea";
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');
	const [count, setCount] = useState(value.length || 0);
	const inputRef = useRef();

	const handleChange = (event) => {
		if (props.fluid) {
			inputRef.current.style.height = "auto";
			inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
		}
		setValue(event.target.value);
		setCount(event.target.value.length);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	};

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	};

	const handleKeyUp = (event) => {
		props.onKeyUp && props.onKeyUp(event);
	};

	const handleKeyDown = (event) => {
		props.onKeyDown && props.onKeyDown(event);
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
			<div className={`${baseClassName}-base`}>
				<textarea
					ref={inputRef}
					className={`${baseClassName}-input`}
					placeholder={props.placeholder}
					value={value}
					rows={props.rows || '2'}
					maxLength={props.maxLength}
					readOnly={props.readonly}
					disabled={props.disabled}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyUp={handleKeyUp}
					onKeyDown={handleKeyDown}
				/>
			</div>
			{
				props.maxLength &&
				<span className={`${baseClassName}-count`}>{count} / {props.maxLength}</span>
			}
		</div>
	);
};

export default UxTextarea;