import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxBadge = ({ ref, ...props }) => {
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

export default UxBadge;