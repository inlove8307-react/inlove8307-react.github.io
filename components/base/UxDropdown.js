import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxDropdown = (props, ref) => {
	const baseClassName = 'ux-dropdown';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxDropdown);