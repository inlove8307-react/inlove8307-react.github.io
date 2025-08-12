"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxSpacer>
 * [props]
 *
 * [event]
 *
 */

const UxSpacer = ({ ref, ...props }) => {
	const baseClassName = 'ux-spacer';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxSpacer;