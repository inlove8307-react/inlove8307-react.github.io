import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxToast = ({ ref, ...props }) => {
	const baseClassName = 'ux-toast';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxToast;