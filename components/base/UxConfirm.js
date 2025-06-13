import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxConfirm = ({ ref, ...props }) => {
	const baseClassName = 'ux-confirm';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxConfirm;