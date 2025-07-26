"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxBottomSheet>
 * [props]
 *
 * [event]
 *
 */

const UxBottomSheet = ({ ref, ...props }) => {
	const baseClassName = 'ux-bottomsheet';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div
			ref={ref}
			className={caseClassName}
		>
			{props.children}
		</div>
	)
};

export default UxBottomSheet;