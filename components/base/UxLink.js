import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxLink = (props, ref) => {
	const baseClassName = 'ux-link';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxLink);