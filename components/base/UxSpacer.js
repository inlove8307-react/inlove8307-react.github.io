import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxSpacer = (props, ref) => {
	const baseClassName = 'ux-spacer';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxSpacer);