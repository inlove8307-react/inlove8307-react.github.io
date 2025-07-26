"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxArticle = ({ ref, ...props }) => {
	const originClassName = 'ux-article';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<article className={mixinClassName}>
			{props.children}
		</article>
	)
};

export default UxArticle;