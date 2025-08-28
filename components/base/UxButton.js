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
			<UxIcon className={classnames('right', {
				i001: props.active,
				i002: !props.active,
			})} />
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
		placeholder: !props.value,
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
			{props.value || props.placeholder}
			{
				props.suffix &&
				<span className={`${baseClassName}-suffix`}>
					{props.suffix}
				</span>
			}
			{props.children}
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

const Progress = ({ ref, ...props }) => {
	const [step, setStep] = useState(props.step || 0);
	const [fill, setFill] = useState({});

	const handleClick = () => {

		props.onClick && props.onClick();
	};

	useEffect(() => {
		setFill({ transform: `translate(-${100 - step / props.max * 100}%, 0) translateZ(0)` });
	}, [step]);

	useEffect(() => {
		setStep(props.step);
	}, [props.step]);

	return (
		<button
			ref={ref}
			type="button"
			className={props.caseClassName}
			title={props.title}
			disabled={props.disabled}
			onClick={handleClick}
		>
			<span className={`${props.baseClassName}-track`} >
				<span className={`${props.baseClassName}-gauge`}>
					<span
						className={`${props.baseClassName}-fill`}
						style={fill}
					/>
				</span>
				<span className={`${props.baseClassName}-stack`} >
					{props.children}
				</span>
			</span>
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
 * role: 버튼 유형 ('select', 'search', 'input', 'progress')
 * placeholder(String): 표시 문구 (role 공통)
 * valid(Boolean): 유효성 여부 (role 공통)
 * readonly(Boolean): 읽기전용 여부 (role 공통)
 * disabled(Boolean): 비활성화 여부
 * prefix(String): 앞 표시 문구 (role input)
 * suffix(String): 뒤 표시 문구 (role input)
 * active(Boolean): 아이콘 유형 (role select)
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
			case 'progress':
				return <Progress {...props} />;
			default:
				return <Default {...props} />;
		}
	};

	return getSlot();
};

export default UxButton;