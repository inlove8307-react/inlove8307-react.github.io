"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxRange>
 * [props]
 *
 * [event]
 *
 */

const UxRange = ({ ref, ...props }) => {
	const baseClassName = 'ux-range';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxRange;