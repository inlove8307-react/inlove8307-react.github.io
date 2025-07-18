import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxForm = ({ ref, ...props }) => {
	const baseClassName = 'ux-form';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxForm;