import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxLayout = ({ ref, ...props }) => {
	const originClassName = 'ux-layout';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<article className={mixinClassName}>
			{props.children}
		</article>
	)
};

export default UxLayout;