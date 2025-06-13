import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxMain = ({ ref, ...props }) => {
	const originClassName = 'ux-main';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<article className={mixinClassName}>
			{props.children}
		</article>
	)
};

export default UxMain;