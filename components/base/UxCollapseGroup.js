import React, { useState, useRef, useEffect } from 'react';
import { getArray, mergeProps } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxCollapseGroup>
 * [props]
 *
 * [event]
 *
 */

const UxCollapseGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-collapse-group';
	const caseClassName = classnames(baseClassName, props.className);
	const [selected, setSelected] = useState(props.selected);

	const handleChange = (index) => {
		setSelected(index);
		props.onChange && props.onChange(selected);
	};

	return (
		<div
			ref={ref}
			className={caseClassName}
		>
			{
				getArray(props.children).map((collapse, index) =>
					mergeProps(collapse, {
						key: index,
						index: index,
						selected,
						once: props.once,
						expanded: index === selected,
						onChange: handleChange,
					})
				)
			}
		</div>
	);
};

export default UxCollapseGroup;