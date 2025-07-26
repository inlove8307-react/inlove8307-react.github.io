"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxAside = ({ ref, ...props }) => {
	const originClassName = 'ux-aside';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<aside className={mixinClassName}>
			{props.children}
		</aside>
	)
};

export default UxAside;