import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxTab = ({ ref, ...props }) => {
	const baseClassName = 'ux-tab-panel';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTab;