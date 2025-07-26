"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxSwitch>
 * [props]
 *
 * [event]
 *
 */

const UxSwitch = ({ ref, ...props }) => {
	const baseClassName = 'ux-switch';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxSwitch;