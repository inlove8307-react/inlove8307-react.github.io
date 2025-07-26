"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxContainer = ({ ref, ...props }) => {
	const originClassName = 'ux-container';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	)
};

export default UxContainer;