import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-grid';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxGroup;