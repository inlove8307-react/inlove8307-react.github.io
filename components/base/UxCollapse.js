import React, { useState, useRef, useEffect } from 'react';
import { getArray, getRole } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxCollapseSummary>
 * [props]
 *
 * [event]
 *
 */

const UxCollapseSummary = (props) => {
	const baseClassName = 'ux-collapse';

	const handleClick = () => {
		props.onClick && props.onClick(props.index);
	};

	return (
		<div
			className={`${baseClassName}-summary`}
		>
			{props.children}
			<button
				type="button"
				className={`${baseClassName}-button`}
				onClick={handleClick}
			>
				<UxIcon
					className={
						props.expanded
						 ? 'i012'
						 : 'i013'
					}
				/>
			</button>
		</div>
	);
};

/**
 * <UxCollapseDetails>
 * [props]
 *
 * [event]
 *
 */

const UxCollapseDetails = (props) => {
	const baseClassName = 'ux-collapse';
	const detailsRef = useRef();

	useEffect(() => {
		const details = detailsRef.current;

		props.expanded
			? details.style.maxHeight = `${details.scrollHeight}px`
			: details.style.maxHeight = 0;
	}, [props.expanded]);

	return (
		<div
			ref={detailsRef}
			className={`${baseClassName}-details`}
		>
			{props.children}
		</div>
	);
};

/**
 * <UxCollapse>
 * [props]
 *
 * [event]
 *
 */

const UxCollapse = (props, ref) => {
	const baseClassName = 'ux-collapse';
	const caseClassName = classnames(baseClassName, props.className);
	const [expanded, setExpanded] = useState(props.expanded || false);

	const handleClick = (index) => {
		setExpanded(!expanded);

		props.onChange && props.onChange(index);
	};

	useEffect(() => {
		if (!props.once) return;

		props.index === props.selected
			? setExpanded(true)
			: setExpanded(false);
	}, [props.selected]);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, {expanded})}
		>
			<UxCollapseSummary
				index={props.index}
				expanded={expanded}
				onClick={handleClick}
			>
				{getRole(getArray(props.children), 'summary')}
			</UxCollapseSummary>
			<UxCollapseDetails
				expanded={expanded}
			>
				{getRole(getArray(props.children), 'details')}
			</UxCollapseDetails>
		</div>
	);
};

export default React.forwardRef(UxCollapse);