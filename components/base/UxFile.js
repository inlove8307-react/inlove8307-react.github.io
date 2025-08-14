"use client";

import React, { useState, useRef, useEffect } from 'react';
import { mergeProps } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxFile>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxFile = ({ ref, ...props }) => {
	const baseClassName = "ux-file";
	const caseClassName = classnames(baseClassName, props.className, {
		default: !props.children,
		slot: props.children,
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled,
	});
	const [value, setValue] = useState(props.value || '');
	const fileRef = useRef();

	const handleClick = (event) => {
		fileRef.current.click();
		props.onClick && props.onClick(event);
	}

	const handleChange = (event) => {
		const array = event.target.value.split("\\");
		!props.children && setValue(array[array.length - 1]);
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
		<div className={caseClassName}>
			<div className={`${baseClassName}-base`}>
				<input
					type="file"
					ref={fileRef}
					className={`${baseClassName}-input`}
					onChange={handleChange}
				/>
				<span className={classnames(`${baseClassName}-label`, {path: value})}>
					{value || props.placeholder}
				</span>
			</div>
			{
				!props.children && !props.readonly && !props.disabled &&
				<button
					type="button"
					className={`${baseClassName}-button`}
					onClick={handleClick}
				>
					<span className="text">파일첨부</span>
				</button>
			}
			{
				props.children &&
				mergeProps(props.children, {
					onClick: handleClick
				})
			}
		</div>
	);
};

export default UxFile;