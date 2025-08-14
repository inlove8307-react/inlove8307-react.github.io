"use client";

import React, { useState, useEffect } from 'react';
import { getArray, mergeProps, getRandomChar } from '@/utils/core';
import { useInView } from 'react-intersection-observer';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <Card>
 * [props]
 * className(String): 추가 클래스
 * type(String): 유형('radio', 'checkbox')
 * selected(String): 선택 값
 * [event]
 * onChange(Func): 선택 변경 이벤트 콜백
 */

const Card = ({ ref, ...props }) => {
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
					disabled: props.disabled,
					randomChar: getRandomChar(),
					onChange: handleChange
				}))
			}
		</div>
	);
};

/**
 * <Checkbox>
 * [props]
 * className(String): 추가 클래스
 * [event]
 */

const Checkbox = ({ ref, ...props }) => {
	return (
		<div className={props.caseClassName}>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
				}))
			}
		</div>
	);
};

/**
 * <Collapse>
 * [props]
 * className(String): 추가 클래스
 * selected(String): 선택 값
 * once(Boolean): 단일 확장 여부
 * [event]
 * onChange(Func): 선택 변경 이벤트 콜백
 */

const Collapse = ({ ref, ...props }) => {
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
 * <Radio>
 * [props]
 * selected(String): 선택 값
 * scroll(Boolean): 스크롤 여부
 * expand(Boolean): 확장 가능 여부
 * expanded(Boolean): 확장 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 선택 변경 이벤트 콜백
 * onExpand(Func): 확장 이벤트 콜백
 */

const Radio = ({ ref, ...props }) => {
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
				expanded: expanded,
				disabled: props.disabled,
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
						disabled: props.disabled,
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
 * <Toggle>
 * [props]
 * className(String): 추가 클래스
 * selected(String): 선택 값
 * [event]
 * onChange(Func): 선택 변경 이벤트 콜백
 */

const Toggle = ({ ref, ...props }) => {
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
		<div className={classnames(props.caseClassName, {
			disabled: props.disabled,
		})}>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
					index,
					selected,
					disabled: props.disabled,
					randomChar: getRandomChar(),
					onChange: handleChange
				}))
			}
		</div>
	);
};

/**
 * <Input>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * [event]
 */

const Input = ({ ref, ...props }) => {
	return (
		<div className={props.caseClassName}>
			<div className={`${props.baseClassName}-placeholder`}>{props.placeholder}</div>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
				}))
			}
		</div>
	);
};

/**
 * <Default>
 * [props]
 * className(String): 추가 클래스
 * [event]
 */

const Default = ({ ref, ...props }) => {
	return (
		<div className={props.caseClassName}>
			{
				getArray(props.children).map((item, index) => mergeProps(item, {
					key: index,
				}))
			}
		</div>
	);
};

/**
 * <UxGroup>
 * [props]
 * className(String): 추가 클래스
 * role(String): 유형('card', 'checkbox', 'collapse', 'radio', 'toggle', 'input', 'default')
 * [event]
 */

const UxGroup = ({ ref, ...props }) => {
	const baseClassName = 'ux-group';
	const caseClassName = classnames(baseClassName, props.className, {
		default: !props.role,
		[`${props.role}`]: props.role,
	});

	const getSlot = () => {
		Object.assign(props, {
			baseClassName,
			caseClassName,
		});

		switch (props.role) {
			case 'card':
				return <Card {...props} />;
			case 'checkbox':
				return <Checkbox {...props} />;
			case 'collapse':
				return <Collapse {...props} />;
			case 'radio':
				return <Radio {...props} />;
			case 'toggle':
				return <Toggle {...props}/>;
			case 'input':
				return <Input {...props}/>;
			default:
				return <Default {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxGroup;