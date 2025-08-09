"use client";

import React, { useState, useEffect } from 'react';
import { getRandomChar, getRole, getArray } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxSwitch>
 * [props]
 *
 * [event]
 *
 */

const UxSwitch = ({ ref, ...props }) => {
	const baseClassName = 'ux-switch';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);
	const [name, setName] = useState(props.name || '');
	const [labelLeft, setLabelLeft] = useState('');
	const [labelRight, setLabelRight] = useState('');

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		if (!name) {
			setName(getRandomChar());
		}
	}, []);

	useEffect(() => {
		props.onChange && props.onChange(checked);
	}, [checked]);

	useEffect(() => {
		if (typeof props.checked === 'boolean') {
			setChecked(props.checked);
		}
	}, [props.checked]);

	useEffect(() => {
		setLabelLeft(getRole(getArray(props.children), 'left')?.props.children);
		setLabelRight(getRole(getArray(props.children), 'right')?.props.children);
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
					name={name}
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