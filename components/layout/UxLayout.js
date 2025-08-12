"use client";

import React from "react";
import classnames from "classnames";

const UxLayout = ({ ref, ...props }) => {
	const baseClassName = 'ux-layout';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxLayout;