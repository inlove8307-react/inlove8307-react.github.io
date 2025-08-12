"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxField>
 * [props]
 *
 * [event]
 *
 */

const UxField = ({ ref, ...props }) => {
	const baseClassName = 'ux-field';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxField;