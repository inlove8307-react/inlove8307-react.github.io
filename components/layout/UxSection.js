"use client";

import React from "react";
import classnames from "classnames";

const UxSection = ({ ref, ...props }) => {
	const baseClassName = 'ux-section';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<section className={caseClassName}>
			{props.children}
		</section>
	)
};

export default UxSection;