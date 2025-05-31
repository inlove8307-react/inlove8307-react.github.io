import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxTextList = (props, ref) => {
	const baseClassName = 'ux-textlist';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxTextList);