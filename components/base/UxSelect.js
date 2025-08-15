"use client";

import React, { useState, useEffect } from 'react';
import { getArray, mergeProps } from '@/utils/core';
import useModal from "@/hook/useModal";
import classnames from 'classnames';
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from '@/components/base/UxButton';

/**
 * <Options>
 * [props]
 * [event]
 */

const Options = ({ ref, ...props }) => {
	const baseClassName = 'ux-options';

	const handleClick = (value, label) => {
		props.onClose({ value, label })
	};

	return (
		<UxSection className="options">
			<UxArticle>
				<UxContent className="space">
					<ul className={baseClassName}>
						{
							getArray(props.options).map((item, index) => {
								const selected = item.props.value === props.value;

								return (
									<li key={index}>
										{mergeProps(item, {
											selected,
											onClick: handleClick,
										})}
									</li>
								);
							})
						}
					</ul>
				</UxContent>
			</UxArticle>
		</UxSection>
	);
};

/**
 * <UxSelect>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const UxSelect = ({ ref, ...props }) => {
	const baseClassName = 'ux-select';
	const caseClassName = classnames(baseClassName, props.className);
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');
	const [label, setLabel] = useState();
	const [active, setActive] = useState(false);

	const handleClick = async (event) => {
		let result = {};

		setActive(true);
		props.onClick && props.onClick(event);

		result = await modal.bottom(Options, {
			value,
			options: props.children,
		});

		result.value && setValue(result.value);
		result.label && setLabel(result.label);

		setActive(false);
	};

	useEffect(() => {
		const filter = getArray(props.children).filter(item => value === item.props.value)[0];

		if (filter) {
			setLabel(filter?.props.children);
		}

		props.onChange && props.onChange(value, label);
	}, [value]);

	return (
		<div
			className={classnames(caseClassName, { selected: value })}
			style={props.style}
		>
			<UxButton
				role="select"
				placeholder={props.placeholder}
				active={active}
				valid={props.valid}
				readonly={props.readonly}
				disabled={props.disabled}
				onClick={handleClick}
			>
				{
					label &&
					<span className="text">
						{label}
					</span>
				}
			</UxButton>
		</div>
	);
};

export default UxSelect;