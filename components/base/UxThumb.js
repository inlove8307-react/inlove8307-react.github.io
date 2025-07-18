import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxThumb = ({ ref, ...props }) => {
	const baseClassName = 'ux-thumb';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxThumb;