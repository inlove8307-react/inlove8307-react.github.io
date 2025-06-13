import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxTextList = ({ ref, ...props }) => {
	const baseClassName = 'ux-textlist';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTextList;