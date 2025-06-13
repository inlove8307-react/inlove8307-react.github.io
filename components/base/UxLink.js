import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxLink = ({ ref, ...props }) => {
	const baseClassName = 'ux-link';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxLink;