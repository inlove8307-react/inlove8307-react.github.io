import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxCheckboxGroup>
 * [props]
 *
 * [event]
 *
 */

const UxCheckboxGroup = (props, ref) => {
	const baseClassName = 'ux-checkbox-group';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	);
};

export default React.forwardRef(UxCheckboxGroup);