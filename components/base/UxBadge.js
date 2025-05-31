import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxBadge = (props, ref) => {
	const baseClassName = 'ux-badge';
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

export default React.forwardRef(UxBadge);