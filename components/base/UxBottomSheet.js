import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxBottomSheet = (props, ref) => {
	const baseClassName = 'ux-bottomsheet';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div
			ref={ref}
			className={caseClassName}
		>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxBottomSheet);