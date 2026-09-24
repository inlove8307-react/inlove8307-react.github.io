"use client";

import React, { useState, useEffect } from 'react';
import { getArray, mergeProps, getRandomChar } from '@/utils/core';
import { useInView } from 'react-intersection-observer';
import classnames from 'classnames';
/* COMPONENT */

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
	const [value, setValue] = useState(props.value || '');
	const [expanded, setExpanded] = useState(props.expanded || false);
	const [beforeRef, beforeInView] = useInView();
	const [afterRef, afterInView] = useInView();

	const handleChange = (value) => {
		setValue(value);
	};

	const handleClick = () => {
		setExpanded(!expanded);
		props.onClick && props.onClick();
	};

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		props.onExpand && props.onExpand(expanded);
	}, [expanded]);

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	useEffect(() => {
		if (typeof props.expanded === 'boolean') {
			setExpanded(props.expanded);
		}
	}, [props.expanded]);

	const Elements = ({ ref, ...props }) => {
		return (
			getArray(props.children).map((item, index) => {
				const object = {
					key: index,
					index,
					selected: value,
					scroll: props.scroll,
					expanded,
					randomChar: getRandomChar(),
					onChange: handleChange
				};

				if (props.disabled !== undefined) {
					object.disabled = props.disabled;
				}

				return mergeProps(item, object);
			})
		);
	};

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
			{
				props.scroll &&
				<>
					<div className={`${props.baseClassName}-scroll`}>
						<span
							ref={beforeRef}
							className={`${props.baseClassName}-before`}
						/>
						<Elements {...props} />
						<span
							ref={afterRef}
							className={`${props.baseClassName}-after`}
						/>
					</div>
					{
						props.expand &&
						<button
							type="button"
							className={`${props.baseClassName}-expand`}
							onClick={handleClick}
						>
							<i className={classnames('icon arrow-down x20', { vertical: expanded })} />
						</button>
					}
				</>
			}
			{
				!props.scroll &&
				<Elements {...props} />
			}
		</div>
	);
};

/**
 * <Input>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 */

const Input = ({ ref, ...props }) => {
	const [options, setOptions] = useState({});
	const [focused, setFocused] = useState(false);
	const Tag = props.tag || 'div';

	const handleFocus = () => {
		setFocused(true);
	};

	const handleClick = () => {
		setFocused(true);
	};

	useEffect(() => {
		props.valid && setOptions({ ...options, valid: props.valid });
		props.readonly && setOptions({ ...options, readonly: props.readonly });
		props.disabled && setOptions({ ...options, disabled: props.disabled });
	}, []);

	return (
		<Tag
			ref={ref}
			className={classnames(props.caseClassName, {
				valid: props.valid === true,
				invalid: props.valid === false,
				readonly: props.readonly,
				disabled: props.disabled,
				label: props.label1,
				focused: focused || props.focused,
			})}
			onFocus={handleFocus}
			onClick={handleClick}
		>
			{
				props.label1 &&
				<span className={`${props.baseClassName}-placeholder`}>
					{props.label1}{props.label2}
				</span>
			}
			{
				props.label1 &&
				<span className={`${props.baseClassName}-label`}>
					{props.label1}
				</span>
			}
			<div className={`${props.baseClassName}-blend`}>
				{
					getArray(props.children).map((element, index) => {
						if (typeof element?.type === 'function') {
							const options = { key: index };

							if (props.valid !== undefined) {
								options.valid = props.valid;
							}

							return mergeProps(element, options);
						}
						else {
							return element;
						}
					})
				}
			</div>
		</Tag>
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
			case 'collapse':
				return <Collapse ref={ref} {...props} />;
			case 'radio':
				return <Radio ref={ref} {...props} />;
			case 'input':
				return <Input ref={ref} {...props}/>;
			default:
				return <Default ref={ref} {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxGroup;