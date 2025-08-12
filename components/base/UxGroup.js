"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxGroup>
 * [props]
 *
 * [event]
 *
 */

const UxGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-group';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxGroup;