"use client";

import React, { useState, useEffect } from 'react';
import { getSlot, getArray } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxSwitch>
 * [props]
 * className(String): 추가 클래스
 * checked(Boolean): 체크 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxSwitch = ({ ref, ...props }) => {
	const baseClassName = 'ux-switch';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);
	const [labelLeft, setLabelLeft] = useState();
	const [labelRight, setLabelRight] = useState();

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

	useEffect(() => {
		setLabelLeft(getSlot(getArray(props.children), 'left')?.props.children);
		setLabelRight(getSlot(getArray(props.children), 'right')?.props.children);
	}, []);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, { checked })}
		>
			{
				labelLeft &&
				<span className={`${baseClassName}-left`}>
					{labelLeft}
				</span>
			}
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
				<span className={`${baseClassName}-ball`} />
			</label>
			{
				labelRight &&
				<span className={`${baseClassName}-right`}>
					{labelRight}
				</span>
			}
		</div>
	);
};

export default UxSwitch;