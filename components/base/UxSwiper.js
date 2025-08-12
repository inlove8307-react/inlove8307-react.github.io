"use client";

import React from 'react';
import classnames from 'classnames';

/**
 * <UxSwiper>
 * [props]
 *
 * [event]
 *
 */

const UxSwiper = ({ ref, ...props }) => {
	const baseClassName = 'ux-swiper';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxSwiper;