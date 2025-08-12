"use client";

import React from "react";
import classnames from "classnames";

const UxContent = ({ ref, ...props }) => {
	const baseClassName = 'ux-content';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxContent;