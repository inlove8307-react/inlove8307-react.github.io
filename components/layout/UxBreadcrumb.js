"use client";

import React from "react";
import classnames from "classnames";

const UxBreadcrumb = ({ ref, ...props }) => {
	const baseClassName = 'ux-breadcrumb';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxBreadcrumb;