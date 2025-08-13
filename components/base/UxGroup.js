"use client";

import React, { useState, useEffect } from 'react';
import { getArray, mergeProps, getRandomChar } from '@/utils/core';
import { useInView } from 'react-intersection-observer';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
// children이 없을 경우 empty 노출
/**
 * <UxDefault>
 * [props]
 *
 * [event]
 *
 */

const UxDefault = ({ ref, ...props }) => {
	return (
		<div className={props.caseClassName}>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
					index: index,
				}))
			}
		</div>
	);
};

/**
 * <UxCard>
 * [props]
 *
 * [event]
 *
 */

const UxCard = ({ ref, ...props }) => {
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
		<div className={props.caseClassName}>
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

/**
 * <UxCheckbox>
 * [props]
 *
 * [event]
 *
 */

const UxCheckbox = ({ ref, ...props }) => {
	return (
		<div className={props.caseClassName}>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
					index: index,
				}))
			}
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

const UxCollapse = ({ ref, ...props }) => {
	const [selected, setSelected] = useState(props.selected);

	const handleChange = (value) => {
		setSelected(value);
	};

	useEffect(() => {
		props.onChange && props.onChange(selected);
	}, [selected]);

	useEffect(() => {
		if (typeof props.selected === 'number') {
			setSelected(props.selected);
		}
	}, [props.selected]);

	return (
		<div className={props.caseClassName}>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
					index: index,
					selected,
					once: props.once,
					expanded: index === selected,
					onChange: handleChange,
				}))
			}
		</div>
	);
};

/**
 * <UxRadio>
 * [props]
 *
 * [event]
 *
 */

const UxRadio = ({ ref, ...props }) => {
	const [selected, setSelected] = useState(props.selected || null);
	const [expanded, setExpanded] = useState(props.expanded || false);
	const [beforeRef, beforeInView] = useInView();
	const [afterRef, afterInView] = useInView();

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
		props.onExpand && props.onExpand(expanded);
	}, [expanded]);

	useEffect(() => {
		if (typeof props.selected === 'string') {
			setSelected(props.selected);
		}
	}, [props.selected]);

	useEffect(() => {
		if (typeof props.expanded === 'boolean') {
			setExpanded(props.expanded);
		}
	}, [props.expanded]);

	return (
		<div
			className={classnames(props.caseClassName, {
				scroll: props.scroll,
				before: beforeInView,
				after: afterInView,
				expand: props.expand,
				expanded: expanded
			})}
		>
			<div className={`${props.baseClassName}-scroll`}>
				{
					props.scroll &&
					<span
						ref={beforeRef}
						className={`${props.baseClassName}-before`}
					/>
				}
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
				{
					props.scroll &&
					<span
						ref={afterRef}
						className={`${props.baseClassName}-after`}
					/>
				}
			</div>
			{
				props.expand &&
				<button
					type="button"
					className={`${props.baseClassName}-expand`}
					onClick={handleClick}
				>
					<UxIcon className={expanded ? 'i001' : 'i002'} />
				</button>
			}
		</div>
	);
};

/**
 * <UxToggle>
 * [props]
 *
 * [event]
 *
 */

const UxToggle = ({ ref, ...props }) => {
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
		<div className={props.caseClassName}>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
					index,
					selected,
					randomChar: getRandomChar(),
					onChange: handleChange
				}))
			}
		</div>
	);
};

/**
 * <UxGroup>
 * [props]
 *
 * [event]
 *
 */

const UxGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-group';
	const caseClassName = classnames(baseClassName, props.className, {
		default: !props.role,
		[`${props.role}`]: props.role,
	});

	const getSlot = (role) => {
		Object.assign(props, {
			baseClassName,
			caseClassName,
		});

		switch (role) {
			case 'card':
				return <UxCard {...props} />;
			case 'checkbox':
				return <UxCheckbox {...props} />;
			case 'collapse':
				return <UxCollapse {...props} />;
			case 'radio':
				return <UxRadio {...props} />;
			case 'toggle':
				return <UxToggle {...props}/>;
			default:
				return <UxDefault {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxGroup;