"use client";

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

/**
 * <UxCard>
 * [props]
 *
 * [event]
 *
 */

const UxCard = ({ ref, ...props }) => {
	const baseClassName = 'ux-card';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);
	const [name, setName] = useState(props.name || '');
	const labelRef = useRef();

	const handleChange = (event) => {
		switch (props.type) {
			case 'checkbox':
				return setChecked(event.target.checked);
			case 'radio':
				return props.onChange && props.onChange(props.value);
		}
	};

	const handleClick = () => {
		if (!props.type) return;

		labelRef.current?.click();
		props.onClick && props.onClick();
	};

	useEffect(() => {
		if (!name) {
			setName(props.randomChar);
		}
	}, [props.randomChar]);

	useEffect(() => {
		if (props.type === 'radio') {
			setChecked(props.value === props.selected);
		}
	}, [props.selected]);

	useEffect(() => {
		if (props.type === 'checkbox') {
			props.onChange && props.onChange(checked);
		}
	}, [checked]);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, { checked })}
		>
			{(props.type === 'radio' || props.type === 'checkbox') &&
				<label
					ref={labelRef}
					className={`${baseClassName}-label`}
				>
					<input
						type={props.type}
						className={`${baseClassName}-input`}
						name={name}
						value={props.value}
						checked={checked}
						disabled={props.disabled}
						onChange={handleChange}
					/>
				</label>
			}
			<button
				type="button"
				className={`${baseClassName}-base`}
				onClick={handleClick}
			>
				{props.children}
			</button>
		</div>
	);
};

export default UxCard;