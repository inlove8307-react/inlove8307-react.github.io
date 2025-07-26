"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxProgress>
 * [props]
 *
 * [event]
 *
 */

const UxProgress = ({ ref, ...props }) => {
	const baseClassName = 'ux-progress';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxProgress;