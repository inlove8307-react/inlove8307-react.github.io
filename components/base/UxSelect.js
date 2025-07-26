"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { getArray, mergeProps } from '@/utils/core';
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxOptions>
 * [props]
 *
 * [event]
 *
 */

const UxOptions = ({ ref, ...props }) => {
	const baseClassName = 'ux-options';

	const handleClick = (value, label) => {
		props.onClose({ value, label })
	};

	return (
		<>
			<UxSection className="options">
				<UxArticle>
					<UxContent>
						<ul className={baseClassName}>
							{
								getArray(props.options).map((item, index) => (
									<li key={index}>
										{mergeProps(item, {
											onClick: handleClick
										})}
									</li>
								))
							}
						</ul>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	)
};

/**
 * <UxSelect>
 * [props]
 *
 * [event]
 *
 */

const UxSelect = ({ ref, ...props }) => {
	const baseClassName = 'ux-select';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		disabled: props.disabled,
	});
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');
	const [label, setLabel] = useState();
	const [icon, setIcon] = useState('i002');

	const handleClick = async () => {
		let result = {};

		setIcon('i001');

		result = await modal.bottom(UxOptions, {
			value,
			options: props.children,
		});

		result.value && setValue(result.value);
		result.label && setLabel(result.label);

		setIcon('i002');
	};

	useEffect(() => {
		const filter = getArray(props.children).filter(item => value === item.props.value)[0];

		if (filter) {
			setLabel(filter?.props.children);
		}

		props.onchange && props.onChange(value, label);
	}, [value]);

	return (
		<div className={caseClassName}>
			<UxButton
				className="outline h3"
				disabled={props.disabled}
				onClick={handleClick}
			>
				{label || props.placeholder}
				<UxIcon className={icon} />
			</UxButton>
		</div>
	)
};

export default UxSelect;