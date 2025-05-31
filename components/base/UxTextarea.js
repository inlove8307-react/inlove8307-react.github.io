import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxTextarea = (props, ref) => {
	const baseClassName = 'ux-textarea';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxTextarea);