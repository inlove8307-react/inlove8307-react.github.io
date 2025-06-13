import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxPagination = ({ ref, ...props }) => {
	const baseClassName = 'ux-pagination';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxPagination;