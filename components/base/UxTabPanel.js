import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxTab = (props, ref) => {
	const baseClassName = 'ux-tab-panel';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxTab);