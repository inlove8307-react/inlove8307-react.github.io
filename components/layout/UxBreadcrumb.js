import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxBreadcrumb = ({ ref, ...props }) => {
	const originClassName = 'ux-breadcrumb';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	)
};

export default UxBreadcrumb;