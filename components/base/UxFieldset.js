"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxFieldset>
 * [props]
 *
 * [event]
 *
 */

const UxFieldset = ({ ref, ...props }) => {
	const baseClassName = 'ux-fieldset';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxFieldset;