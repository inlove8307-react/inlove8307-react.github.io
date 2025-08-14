"use client";

import React from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

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
			{props.selected && <UxIcon className="i128 right" />}
		</div>
	)
};

export default UxOption;