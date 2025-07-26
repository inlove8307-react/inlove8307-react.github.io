"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxPopover>
 * [props]
 *
 * [event]
 *
 */

const UxPopover = ({ ref, ...props }) => {
	const baseClassName = 'ux-popover';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxPopover;