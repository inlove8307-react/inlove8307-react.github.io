import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxKeypad>
 * [props]
 *
 * [event]
 *
 */

const UxKeypad = ({ ref, ...props }) => {
	const baseClassName = 'ux-keypad';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxKeypad;