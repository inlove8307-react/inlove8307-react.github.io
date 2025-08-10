"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxTextarea>
 * [props]
 *
 * [event]
 *
 */

const UxTextarea = ({ ref, ...props }) => {
	const baseClassName = "ux-textarea";
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const inputRef = useRef();
	const [count, setCount] = useState(props.value?.length || 0);

	const handleChange = (event) => {
		if (props.fluid) {
			inputRef.current.style.height = "auto";
			inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
		}
		setCount(event.target.value.length);
		props.onChange && props.onChange(event);
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

	return (
		<div className={caseClassName}>
			<div className={`${baseClassName}-base`}>
				<textarea
					ref={inputRef}
					className={`${baseClassName}-input`}
					placeholder={props.placeholder}
					value={props.value}
					rows={props.rows || 2}
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