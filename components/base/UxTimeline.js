"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxTimeline>
 * [props]
 *
 * [event]
 *
 */

const UxTimeline = ({ ref, ...props }) => {
	const baseClassName = 'ux-timeline';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTimeline;