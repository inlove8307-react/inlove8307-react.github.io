import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxTable = ({ ref, ...props }) => {
	const baseClassName = 'ux-table';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTable;