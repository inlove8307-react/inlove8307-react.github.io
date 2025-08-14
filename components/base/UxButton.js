"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <Select>
 * [props]
 * className(String): 추가 클래스
 * title(String): 접근성 타이틀
 * active(Boolean): 아이콘 유형
 * placeholder(String): 표시 문구
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const Select = ({ ref, ...props }) => {
	const caseClassName = classnames(props.caseClassName, {
		placeholder: !props.children,
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
	});
	const [icon, setIcon] = useState('i002');

	const handleClick = () => {
		!props.readonly && props.onClick && props.onClick();
	};

	useEffect(() => {
		props.active
			? setIcon('i001')
			: setIcon('i002');
	}, [props.active]);

	return (
		<button
			ref={ref}
			type="button"
			className={caseClassName}
			disabled={props.disabled}
			title={props.title}
			onClick={handleClick}
		>
			{props.children ? props.children : props.placeholder}
			<UxIcon className={classnames(icon, 'right')} />
		</button>
	);
};

/**
 * <Search>
 * [props]
 * className(String): 추가 클래스
 * title(String): 접근성 타이틀
 * placeholder(String): 표시 문구
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const Search = ({ ref, ...props }) => {
	const caseClassName = classnames(props.caseClassName, {
		placeholder: !props.children,
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
	});

	const handleClick = () => {
		!props.readonly && props.onClick && props.onClick();
	};

	return (
		<button
			ref={ref}
			type="button"
			className={caseClassName}
			disabled={props.disabled}
			title={props.title}
			onClick={handleClick}
		>
			{props.children ? props.children : props.placeholder}
			<UxIcon className="i233 right" />
		</button>
	);
};

/**
 * <Input>
 * [props]
 * className(String): 추가 클래스
 * title(String): 접근성 타이틀
 * placeholder(String): 표시 문구
 * prefix(String): 앞 표시 문구
 * suffix(String): 뒤 표시 문구
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const Input = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const caseClassName = classnames(props.caseClassName, {
		placeholder: !props.children,
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
	});

	const handleClick = () => {
		!props.readonly && props.onClick && props.onClick();
	};

	return (
		<button
			ref={ref}
			type="button"
			className={caseClassName}
			title={props.title}
			disabled={props.disabled}
			onClick={handleClick}
		>
			{
				props.prefix &&
				<span className={`${baseClassName}-prefix`}>
					{props.prefix}
				</span>
			}
			{props.children ? props.children : props.placeholder}
			{
				props.suffix &&
				<span className={`${baseClassName}-suffix`}>
					{props.suffix}
				</span>
			}
		</button>
	);
};

/**
 * <Default>
 * [props]
 * className(String): 추가 클래스
 * title(String): 접근성 타이틀
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const Default = ({ ref, ...props }) => {
	const handleClick = () => {
		props.onClick && props.onClick();
	};

	return (
		<button
			ref={ref}
			type="button"
			className={props.caseClassName}
			title={props.title}
			disabled={props.disabled}
			onClick={handleClick}
		>
			{props.children}
		</button>
	);
};

/**
 * <UxButton>
 * [props]
 * className(String): 추가 클래스
 * title(String): 접근성 타이틀
 * role: 버튼 유형 ('select' || 'search' || 'input')
 * active(Boolean): 아이콘 유형 (role select)
 * placeholder(String): 표시 문구 (role 공통)
 * valid(Boolean): 유효성 여부 (role 공통)
 * suffix(String): 앞 표시 문구 (role input)
 * prefix(String): 뒤 표시 문구 (role input)
 * readonly(Boolean): 읽기전용 여부 (role 공통)
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const UxButton = ({ ref, ...props }) => {
	const baseClassName = 'ux-button';
	const caseClassName = classnames(baseClassName, props.className, {
		default: !props.role,
		[`${props.role}`]: props.role,
		disabled: props.disabled,
	});

	const getSlot = () => {
		Object.assign(props, {
			baseClassName,
			caseClassName,
		});

		switch (props.role) {
			case 'select':
				return <Select {...props} />;
			case 'search':
				return <Search {...props} />;
			case 'input':
				return <Input {...props} />;
			default:
				return <Default {...props} />;
		}
	};

	return getSlot();
};

export default UxButton;