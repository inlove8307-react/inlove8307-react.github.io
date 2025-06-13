import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxInfo = ({ ref, ...props }) => {
	const baseClassName = 'ux-info';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxInfo;