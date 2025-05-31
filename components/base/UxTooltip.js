import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxTooltip = (props, ref) => {
	const baseClassName = 'ux-tooltip';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxTooltip);