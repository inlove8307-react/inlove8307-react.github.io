import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxSwiperSlide = ({ ref, ...props }) => {
	const baseClassName = 'ux-swiper-slide';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxSwiperSlide;