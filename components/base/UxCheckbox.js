"use client";

import React, { useState, useEffect } from 'react';
import { getArray, getSlot } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */

/**
 * <Switch>
 * [props]
 * className(String): 추가 클래스
 * checked(Boolean): 체크 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 */

const Switch = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const caseClassName = props.caseClassName;
	const [checked, setChecked] = useState(props.checked || false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		props.onChange && props.onChange(checked);
	}, [checked]);

	useEffect(() => {
		if (typeof props.checked === 'boolean') {
			setChecked(props.checked);
		}
	}, [props.checked]);

	useEffect(() => {
		console.log(props.caseClassName);
	}, []);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, {
				checked,
				disabled: props.disabled,
			})}
		>
			<label
				className={`${baseClassName}-base`}
			>
				<input
					type="checkbox"
					className={`${baseClassName}-input`}
					checked={checked}
					disabled={props.disabled}
					onChange={handleChange}
				/>
				<span className={`${baseClassName}-ball`} />
			</label>
		</div>
	);
};

/**
 * <Default>
 * [props]
 * className(String): 추가 클래스
 * checked(Boolean): 체크 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 */

const Default = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const caseClassName = props.caseClassName;
	const [checked, setChecked] = useState(props.checked || false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		props.onChange && props.onChange(checked);
	}, [checked]);

	useEffect(() => {
		if (typeof props.checked === 'boolean') {
			setChecked(props.checked);
		}
	}, [props.checked]);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, {
				checked,
				disabled: props.disabled,
			})}
		>
			<label
				className={`${baseClassName}-base`}
			>
				<input
					type="checkbox"
					className={`${baseClassName}-input`}
					checked={checked}
					disabled={props.disabled}
					onChange={handleChange}
				/>
				<i className={classnames('icons', {
					check: caseClassName.includes('thin'),
					checkbox: !caseClassName.includes('thin'),
					selected: checked,
					disabled: props.disabled
				})} />
				<span className={`${baseClassName}-label`}>
					{props.children}
				</span>
			</label>
		</div>
	);
};

const UxCheckbox = ({ ref, ...props }) => {
	const baseClassName = 'ux-checkbox';
	const caseClassName = classnames(baseClassName, props.className, {
		default: !props.role,
		[`${props.role}`]: props.role,
	});

	const getSlot = () => {
		console.log('checkbox role', caseClassName);
		Object.assign(props, {
			baseClassName,
			caseClassName,
		});

		switch (props.role) {
			case 'switch':
				return <Switch {...props}/>;
			default:
				return <Default {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxCheckbox;