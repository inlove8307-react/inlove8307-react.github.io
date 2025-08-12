"use client";

import React from "react";
import { useInView } from 'react-intersection-observer';
import classnames from "classnames";

const UxContainer = ({ ref, ...props }) => {
	const baseClassName = 'ux-container';
	const [beforeRef, beforeInView] = useInView();
	const [afterRef, afterInView] = useInView();

	return (
		<div className={classnames(baseClassName, props.className, {
			before: beforeInView,
			after: afterInView,
		})}>
			<span
				ref={beforeRef}
				className={`${baseClassName}-before`}
			/>
			{props.children}
			<span
				ref={afterRef}
				className={`${baseClassName}-after`}
			/>
		</div>
	)
};

export default UxContainer;