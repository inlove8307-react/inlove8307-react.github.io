"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxMain = ({ ref, ...props }) => {
	const originClassName = 'ux-main';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<main ref={ref} className={mixinClassName}>
			{props.children}
		</main>
	)
};

export default UxMain;