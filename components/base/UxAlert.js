import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxAlert = ({ ref, ...props }) => {
	const baseClassName = 'ux-alert';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div
			ref={ref}
			className={caseClassName}
		>
			{props.children}
		</div>
	)
};

export default UxAlert;