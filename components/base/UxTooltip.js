"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxTooltip>
 * [props]
 *
 * [event]
 *
 */

const UxTooltip = ({ ref, ...props }) => {
	const baseClassName = 'ux-tooltip';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTooltip;