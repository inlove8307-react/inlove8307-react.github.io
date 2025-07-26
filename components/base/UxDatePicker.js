import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxDatePicker>
 * [props]
 *
 * [event]
 *
 */

const UxDatePicker = ({ ref, ...props }) => {
	const baseClassName = 'ux-datepicker';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxDatePicker;