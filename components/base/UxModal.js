import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxModal = (props, ref) => {
	const baseClassName = 'ux-modal';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxModal);