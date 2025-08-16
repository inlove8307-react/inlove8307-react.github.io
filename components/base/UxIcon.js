"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxIcon>
 * [props]
 *
 * [event]
 *
 */

const UxIcon = ({ ref, ...props }) => {
	const baseClassName = 'ux-icon';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<i className={caseClassName} />
	);
};

export default UxIcon;