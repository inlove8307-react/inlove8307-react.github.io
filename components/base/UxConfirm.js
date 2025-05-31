import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxConfirm = (props, ref) => {
	const baseClassName = 'ux-confirm';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxConfirm);