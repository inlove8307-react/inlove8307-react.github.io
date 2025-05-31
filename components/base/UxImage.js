import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxImage = (props, ref) => {
	const baseClassName = 'ux-image';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxImage);