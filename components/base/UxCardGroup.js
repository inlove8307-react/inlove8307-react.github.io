import React, { useState, useEffect } from 'react';
import { getArray, mergeProps, getRandomChar } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxCardGroup>
 * [props]
 *
 * [event]
 *
 */

const UxCardGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-card-group';
	const caseClassName = classnames(baseClassName, props.className);
	const [selected, setSelected] = useState(props.selected || null);

	const handleChange = (value) => {
		setSelected(value);
	};

	useEffect(() => {
		props.onChange && props.onChange(selected);
	}, [selected]);

	useEffect(() => {
		if (typeof props.selected === 'string') {
			setSelected(props.selected);
		}
	}, [props.selected]);

	return (
		<div
			ref={ref}
			className={caseClassName}
		>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
					index,
					selected,
					type: props.type,
					randomChar: getRandomChar(),
					onChange: handleChange
				}))
			}
		</div>
	);
};

export default UxCardGroup;