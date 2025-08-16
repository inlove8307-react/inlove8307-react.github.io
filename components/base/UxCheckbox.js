"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxCheckbox>
 * [props]
 * className(String): 추가 클래스
 * checked(Boolean): 체크 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxCheckbox = ({ ref, ...props }) => {
	const baseClassName = 'ux-checkbox';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		props.onChange && props.onChange(checked);
	}, [checked]);

	useEffect(() => {
		if (typeof props.checked === 'boolean') {
			setChecked(props.checked);
		}
	}, [props.checked]);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, { checked })}
		>
			<label
				className={`${baseClassName}-base`}
			>
				<input
					type="checkbox"
					className={`${baseClassName}-input`}
					checked={checked}
					disabled={props.disabled}
					onChange={handleChange}
				/>
				<UxIcon className="i132 w24" />
				<span className={`${baseClassName}-label`}>
					{props.children}
				</span>
			</label>
		</div>
	);
};

export default UxCheckbox;