"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxDock = ({ ref, ...props }) => {
	const originClassName = 'ux-dock';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	)
};

export default UxDock;