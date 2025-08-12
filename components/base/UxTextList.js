"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxTextList>
 * [props]
 *
 * [event]
 *
 */

const UxTextList = ({ ref, ...props }) => {
	const baseClassName = 'ux-textlist';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTextList;