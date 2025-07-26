"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxDivider>
 * [props]
 *
 * [event]
 *
 */

const UxDivider = ({ ref, ...props }) => {
	const baseClassName = 'ux-divider';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<hr className={caseClassName} />
	)
};

export default UxDivider;