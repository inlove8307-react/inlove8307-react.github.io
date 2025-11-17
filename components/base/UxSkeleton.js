"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxSkeleton>
 * [props]
 *
 * [event]
 *
 */

const UxSkeleton = ({ ref, ...props }) => {
	const baseClassName = 'ux-skeleton';
	const caseClassName = classnames(baseClassName, props.className);
	const [loaded, setLoaded] = useState(false);
	const [style, setStyle] = useState({});

	useEffect(() => {
		loaded && setStyle({});
	}, [loaded]);

	useEffect(() => {
		setStyle({
			width: props.width,
			height: props.height,
			borderRadius: props.radius,
		});
	}, [props.width, props.height]);

	useEffect(() => {
		if (typeof props.loaded === 'boolean') {
			setLoaded(props.loaded);
		}
	}, [props.loaded]);

	return (
		<div
			className={classnames(caseClassName, { loaded })}
			style={style}
		>
			{props.children}
			{!loaded && <span className={`${baseClassName}-gradient`} />}
		</div>
	)
};

export default UxSkeleton;