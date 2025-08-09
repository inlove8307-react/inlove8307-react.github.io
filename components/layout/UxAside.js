"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxAside = ({ ref, ...props }) => {
	const baseClassName = 'ux-aside';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<aside className={caseClassName}>
			{props.children}
		</aside>
	)
};

export default UxAside;