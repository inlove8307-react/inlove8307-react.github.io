"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTitle = ({ ref, ...props }) => {
	const baseClassName = 'ux-subject';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxTitle;