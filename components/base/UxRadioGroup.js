"use client";

import React, { useState, useEffect, use } from 'react';
import { getArray, mergeProps, getRandomChar } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxRadioGroup>
 * [props]
 *
 * [event]
 *
 */

const UxRadioGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-radio';
	const [selected, setSelected] = useState(props.selected || null);
	const [expanded, setExpanded] = useState(props.expanded || false);

	const handleChange = (value) => {
		setSelected(value);
	};

	const handleClick = () => {
		setExpanded(!expanded);
		props.onClick && props.onClick();
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
			className={classnames(`${baseClassName}-group`, props.className, {
				scroll: props.scroll,
				expand: props.expand,
				expanded: expanded
			})}
		>
			<div className={`${baseClassName}-scroll`}>
				{
					getArray(props.children).map((item, index) => mergeProps(item, {
						key: index,
						index,
						selected,
						expanded,
						scroll: props.scroll,
						randomChar: getRandomChar(),
						onChange: handleChange
					}))
				}
			</div>
			{
				props.expand &&
				<button
					type="button"
					className={`${baseClassName}-expand`}
					onClick={handleClick}
				>
					<UxIcon className={expanded ? 'i001' : 'i002'} />
				</button>
			}
		</div>
	);
};

export default UxRadioGroup;