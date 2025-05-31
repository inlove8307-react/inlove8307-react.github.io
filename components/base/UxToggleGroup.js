import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxToggleGroup = (props, ref) => {
	const baseClassName = 'ux-togglegroup';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxToggleGroup);