import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxText = ({ ref, ...props }) => {
	const baseClassName = 'ux-text';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxText;