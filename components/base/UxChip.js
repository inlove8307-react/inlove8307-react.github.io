"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxChip>
 * [props]
 *
 * [event]
 *
 */

const UxChip = ({ ref, ...props }) => {
	const baseClassName = 'ux-chip';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxChip;