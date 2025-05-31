import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxContainer = (props, ref) => {
	const originClassName = 'ux-container';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<article className={mixinClassName}>
			{props.children}
		</article>
	)
};

export default React.forwardRef(UxContainer);