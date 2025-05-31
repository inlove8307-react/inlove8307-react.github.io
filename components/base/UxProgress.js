import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxProgress = (props, ref) => {
	const baseClassName = 'ux-progress';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxProgress);