import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxSelect = ({ ref, ...props }) => {
	const baseClassName = 'ux-select';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxSelect;