import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

/**
 * <UxLink>
 * [props]
 *
 * [event]
 *
 */

const UxLink = ({ ref, ...props }) => {
	const baseClassName = 'ux-link';
	const caseClassName = classnames(baseClassName, props.className);
	const router = useRouter();

	const handleClick = () => {
		props.onClick && props.onClick();
		props.path && router.push(props.path);
	};

	return (
		<div className={caseClassName}>
			<button
				className={`${baseClassName}-button`}
				onClick={handleClick}
				title={props.title}
			>
				{props.children}
			</button>
		</div>
	)
};

export default UxLink;