"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';

/**
 * <UxOption>
 * [props]
 *
 * [event]
 *
 */

const UxOption = ({ ref, ...props }) => {
	const baseClassName = 'ux-option';
	const caseClassName = classnames(baseClassName, props.className);

	const handleClick = () => {
		props.onClick && props.onClick(props.value, props.children);
	};

	return (
		<div className={caseClassName}>
			<UxButton
				className={`${baseClassName}-button`}
				onClick={handleClick}
			>
				{props.children}
			</UxButton>
		</div>
	)
};

export default UxOption;