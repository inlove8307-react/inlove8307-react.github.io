import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxDropdown = ({ ref, ...props }) => {
	const baseClassName = 'ux-dropdown';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxDropdown;