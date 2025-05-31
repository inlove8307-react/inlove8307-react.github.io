import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxGroup = (props, ref) => {
	const baseClassName = 'ux-group';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxGroup);