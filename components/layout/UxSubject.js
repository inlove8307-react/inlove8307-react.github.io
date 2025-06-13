import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTitle = ({ ref, ...props }) => {
	const originClassName = 'ux-subject';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	)
};

export default UxTitle;