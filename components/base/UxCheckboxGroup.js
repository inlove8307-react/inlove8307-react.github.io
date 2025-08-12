"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxCheckboxGroup>
 * [props]
 *
 * [event]
 *
 */

const UxCheckboxGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-checkbox-group';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	);
};

export default UxCheckboxGroup;