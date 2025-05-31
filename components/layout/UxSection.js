import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxSection = (props, ref) => {
	const originClassName = 'ux-section';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<section className={mixinClassName}>
			{props.children}
		</section>
	)
};

export default React.forwardRef(UxSection);