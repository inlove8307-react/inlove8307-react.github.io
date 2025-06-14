import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxSpacer = ({ ref, ...props }) => {
	const baseClassName = 'ux-spacer';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxSpacer;