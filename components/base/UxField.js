import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxField = ({ ref, ...props }) => {
	const baseClassName = 'ux-field';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxField;