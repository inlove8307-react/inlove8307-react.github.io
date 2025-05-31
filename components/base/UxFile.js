import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxFile = (props, ref) => {
	const baseClassName = 'ux-file';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxFile);