"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxFilter>
 * [props]
 *
 * [event]
 *
 */

const UxFilter = ({ ref, ...props }) => {
	const baseClassName = 'ux-filter';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxFilter;