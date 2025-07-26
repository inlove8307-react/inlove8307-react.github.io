"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxSection = ({ ref, ...props }) => {
	const originClassName = 'ux-section';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<section className={mixinClassName}>
			{props.children}
		</section>
	)
};

export default UxSection;