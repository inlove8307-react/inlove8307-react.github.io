"use client";

import React, { useState, useEffect } from 'react';
import { getRandomChar } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxCheckbox>
 * [props]
 *
 * [event]
 *
 */

const UxCheckbox = ({ ref, ...props }) => {
	const baseClassName = 'ux-checkbox';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);
	const [name, setName] = useState(props.name || '');

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
					name={name}
					checked={checked}
					disabled={props.disabled}
					onChange={handleChange}
				/>
				<UxIcon
					className="i132"
					size="2.4rem"
				/>
				<span className={`${baseClassName}-label`}>
					{props.children}
				</span>
			</label>
		</div>
	);
};

export default UxCheckbox;