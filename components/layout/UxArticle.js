"use client";

import React from "react";
import classnames from "classnames";

const UxArticle = ({ ref, ...props }) => {
	const baseClassName = 'ux-article';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<article className={caseClassName}>
			{props.children}
		</article>
	)
};

export default UxArticle;