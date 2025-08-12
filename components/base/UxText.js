"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxText>
 * [props]
 *
 * [event]
 *
 */

const UxText = ({ ref, ...props }) => {
	const baseClassName = 'ux-text';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxText;