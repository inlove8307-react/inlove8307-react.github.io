"use client";

import React from 'react';
import classnames from 'classnames';
/* COMPONENT */

/**
 * <UxOption>
 * [props]
 * className(String): 추가 클래스
 * value(String): 값
 * selected(Boolean): 선택 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const UxOption = ({ ref, ...props }) => {
	const baseClassName = 'ux-option';
	const caseClassName = classnames(baseClassName, props.className, { selected: props.selected });

	const handleClick = () => {
		props.onClick && props.onClick(props.value, props.children);
	};

	return (
		<div className={caseClassName}>
			<button
				type="button"
				className={`${baseClassName}-button`}
				onClick={handleClick}
			>
				{props.children}
			</button>
			<i className={classnames('icons check', { selected: props.selected })} />
		</div>
	)
};

export default UxOption;