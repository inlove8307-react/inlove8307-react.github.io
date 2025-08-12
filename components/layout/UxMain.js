"use client";

import React from "react";
import classnames from "classnames";

const UxMain = ({ ref, ...props }) => {
	const baseClassName = 'ux-main';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<main ref={ref} className={caseClassName}>
			{props.children}
		</main>
	)
};

export default UxMain;