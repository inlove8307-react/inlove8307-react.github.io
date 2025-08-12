"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxButton>
 * [props]
 *
 * [event]
 *
 */

const UxButton = ({ ref, ...props }) => {
	const baseClassName = 'ux-button';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		disabled: props.disabled,
		select: props.select,
		search: props.search,
	});
	const [icon, setIcon] = useState('');

	const handleClick = (event) => {
		props.onClick && props.onClick(event);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	}

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	}

	useEffect(() => {
		if (props.select) {
			props.active
				? setIcon('i001')
				: setIcon('i002');
		}
	}, [props.active]);

	return (
		<button
			ref={ref}
			type="button"
			className={caseClassName}
			disabled={props.disabled}
			title={props.title}
			onClick={handleClick}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			{props.children}
			{props.select && <UxIcon className={classnames(icon, 'right')} />}
			{props.search && <UxIcon className="i233 right" />}
		</button>
	)
};

export default UxButton;