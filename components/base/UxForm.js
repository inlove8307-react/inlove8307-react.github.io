import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxForm = (props, ref) => {
	const baseClassName = 'ux-form';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxForm);