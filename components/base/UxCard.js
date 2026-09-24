"use client";

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

/**
 * <Radio>
 * [props]
 *
 * [event]
 *
 */

const Radio = ({ ref, ...props }) => {
	const [name, setName] = useState(props.name || '');
	const [checked, setChecked] = useState(props.checked || false);

	const handleChange = () => {
		props.onChange && props.onChange(props.value);
	};

	useEffect(() => {
		if (!name) {
			setName(props.randomChar);
		}
	}, [props.randomChar]);

	useEffect(() => {
		setChecked(props.value === props.selected);
	}, [props.selected]);

	return (
		<label
			ref={ref}
			className={classnames(props.caseClassName, {
				checked: checked,
				disabled: props.disabled,
			})}
			style={props.style}
		>
			<input
				type="radio"
				className={`${props.baseClassName}-input`}
				name={name}
				value={props.value}
				checked={checked}
				disabled={props.disabled}
				onChange={handleChange}
			/>
			<div className={`${props.baseClassName}-base`}>
				{props.children}
			</div>
		</label>
	);
};

/**
 * <Checkbox>
 * [props]
 *
 * [event]
 *
 */

const Checkbox = ({ ref, ...props }) => {
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
		<label
			ref={ref}
			className={classnames(props.caseClassName, {
				checked: checked,
				disabled: props.disabled,
			})}
			style={props.style}
		>
			<input
				type="checkbox"
				className={`${props.baseClassName}-input`}
				checked={checked}
				disabled={props.disabled}
				onChange={handleChange}
			/>
			<div className={`${props.baseClassName}-base`}>
				{props.children}
			</div>
		</label>
	);
};

/**
 * <Button>
 * [props]
 *
 * [event]
 *
 */

const Button = ({ ref, ...props }) => {
	const handleClick = (event) => {
		props.onClick && props.onClick();
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			handleClick();
		}
	};

	return (
		<div
			ref={ref}
			role="button"
			tabIndex="0"
			className={props.caseClassName}
			style={props.style}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			<div className={`${props.baseClassName}-base`}>
				{props.children}
			</div>
		</div>
	);
};

/**
 * <Default>
 * [props]
 *
 * [event]
 *
 */

const Default = ({ ref, ...props }) => {
	return (
		<div
			ref={ref}
			className={props.caseClassName}
			style={props.style}
		>
			<div className={`${props.baseClassName}-base`}>
				{props.children}
			</div>
		</div>
	);
};

const UxCard = ({ ref, ...props }) => {
	const baseClassName = 'ux-card';
	const caseClassName = classnames(baseClassName, props.className, {
		default: !props.role,
		[`${props.role}`]: props.role,
	});

	const getSlot = () => {
		Object.assign(props, {
			baseClassName,
			caseClassName,
		});

		switch (props.role) {
			case 'radio':
				return <Radio ref={ref} {...props} />;
			case 'checkbox':
				return <Checkbox ref={ref} {...props} />;
			case 'button':
				return <Button ref={ref} {...props} />;
			default:
				return <Default ref={ref} {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxCard;