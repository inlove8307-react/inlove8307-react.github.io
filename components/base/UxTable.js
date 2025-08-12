"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxTable>
 * [props]
 *
 * [event]
 *
 */

const UxTable = ({ ref, ...props }) => {
	const baseClassName = 'ux-table';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTable;