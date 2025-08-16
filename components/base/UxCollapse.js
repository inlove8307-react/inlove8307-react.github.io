"use client";

import React, { useState, useRef, useEffect } from 'react';
import { getArray, getRole } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxCollapseSummary>
 * [props]
 * index(Number): 그룹일 경우 식별값
 * entire(Boolean): summary 전체 클릭 이벤트 여부
 * expanded(Boolean): 확장 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const UxCollapseSummary = (props) => {
	const baseClassName = 'ux-collapse';

	const handleClick = () => {
		props.onClick && props.onClick(props.index);
	};

	const Content = () => {
		return (
			<div className={`${baseClassName}-content`}>
				{props.children}
			</div>
		);
	};

	return (
		<div className={classnames(`${baseClassName}-summary`, { entire: props.entire })}>
			{!props.entire && <Content />}
			<button
				type="button"
				className={`${baseClassName}-button`}
				onClick={handleClick}
			>
				{props.entire && <Content />}
				<UxIcon className={props.expanded ? 'i001' : 'i002'} />
			</button>
		</div>
	);
};

/**
 * <UxCollapseDetails>
 * [props]
 * expanded(Boolean): 확장 여부
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
			<div className={`${baseClassName}-content`}>
				{props.children}
			</div>
		</div>
	);
};

/**
 * <UxCollapse>
 * [props]
 * className(String): 추가 클래스
 * index(Number): 그룹일 경우 식별값
 * entire(Boolean): summary 전체 클릭 이벤트 여부
 * expanded(Boolean): 확장 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxCollapse = ({ ref, ...props }) => {
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
			className={classnames(caseClassName, { expanded })}
		>
			<UxCollapseSummary
				index={props.index}
				entire={props.entire}
				expanded={expanded}
				onClick={handleClick}
			>
				{getRole(getArray(props.children), 'summary')?.props.children}
			</UxCollapseSummary>
			<UxCollapseDetails
				expanded={expanded}
			>
				{getRole(getArray(props.children), 'details')?.props.children}
			</UxCollapseDetails>
		</div>
	);
};

export default UxCollapse;