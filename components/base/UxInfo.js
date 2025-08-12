"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxInfo>
 * [props]
 *
 * [event]
 *
 */

const UxInfo = ({ ref, ...props }) => {
	const baseClassName = 'ux-info';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxInfo;