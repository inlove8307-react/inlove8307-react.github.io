import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxFilter = (props, ref) => {
	const baseClassName = 'ux-filter';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxFilter);