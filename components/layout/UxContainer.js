import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxContainer = ({ ref, ...props }) => {
	const originClassName = 'ux-container';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<article className={mixinClassName}>
			{props.children}
		</article>
	)
};

export default UxContainer;