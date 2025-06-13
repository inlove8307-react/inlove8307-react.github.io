import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxButton>
 * [props]
 *
 * [event]
 *
 */

const UxButton = ({ ref, ...props }) => {
	const baseClassName = 'ux-button';
	const caseClassName = classnames(baseClassName, props.className);

	const handleClick = (event) => {
		props.onClick && props.onClick(event);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	}

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	}

	return (
		<button
			ref={ref}
			type="button"
			className={caseClassName}
			disabled={props.disabled}
			title={props.title}
			onClick={handleClick}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			{props.children}
		</button>
	)
};

export default UxButton;