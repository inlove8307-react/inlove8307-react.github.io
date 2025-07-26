"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxList>
 * [props]
 *
 * [event]
 *
 */

const UxList = ({ ref, ...props }) => {
	const baseClassName = 'ux-list';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxList;