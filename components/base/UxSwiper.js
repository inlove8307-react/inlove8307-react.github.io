import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxSwiper = (props, ref) => {
	const baseClassName = 'ux-swiper';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxSwiper);