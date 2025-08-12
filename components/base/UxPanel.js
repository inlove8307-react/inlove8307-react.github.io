"use client";

import React, { useState, useEffect } from 'react';
import { getArray, getRole } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxTab>
 * [props]
 *
 * [event]
 *
 */

const UxTab = ({ ref, ...props }) => {
	const baseClassName = 'ux-panel';
	const caseClassName = classnames(baseClassName, props.className , {
		active: props.active
	});
	const [details, setDetails] = useState();

	useEffect(() => {
		setDetails(getRole(getArray(props.children), 'details'));
	}, []);

	return (
		<div className={caseClassName}>
			{details && details.props.children}
		</div>
	)
};

export default UxTab;