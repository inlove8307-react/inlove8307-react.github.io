"use client";

import React from "react";
import classnames from "classnames";

const UxDock = ({ ref, ...props }) => {
	const baseClassName = 'ux-dock';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxDock;