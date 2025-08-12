"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxFlag>
 * [props]
 *
 * [event]
 *
 */

const UxFlag = ({ ref, ...props }) => {
	const baseClassName = 'ux-flag';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxFlag;