"use client";

import React, { useState, useEffect, useRef } from 'react';
import useModal from "@/hook/useModal";
import classnames from 'classnames';
/* COMPONENT */
import UxGroup from '@/components/base/UxGroup';
/* POPUP */
import PopupTooltip from '@/components/popup/Tooltip';

/**
 * <Tooltip>
 * [props]
 *
 * [event]
 *
 */

const Tooltip = ({ ref, ...props }) => {
	const caseClassName = classnames(props.caseClassName);
	const modal = useModal();
	const openerRef = useRef();

	const handleClick = async () => {
		await modal.tooltip(PopupTooltip, {
			content: props.children,
			openerRef,
		});
	};

	return (
		<button
			ref={openerRef}
			type="button"
			className={caseClassName}
			disabled={props.disabled}
			title={props.title}
			onClick={handleClick}
		>
			<i className="icon tooltip" />
		</button>
	);
};

/**
 * <Select>
 * [props]
 *
 * [event]
 *
 */

const Select = ({ ref, ...props }) => {
	const handleClick = () => {
		!props.readonly && props.onClick && props.onClick();
	};

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={classnames(props.role, props.className, { selected: props.children })}
			focused={props.children}
			inside={props.inside}
		>
			<button
				ref={ref}
				type="button"
				className={props.baseClassName}
				disabled={props.disabled}
				title={props.title}
				onClick={handleClick}
			>
				{props.children ? props.children : props.placeholder}
			</button>
			<i className={classnames('icon mask', {
				'arrow-down x20': !props.icon,
				[`${props.icon} x24`]: props.icon,
				vertical: !props.icon && props.active,
				disabled: props.readonly || props.disabled,
			})} />
		</UxGroup>
	);
};

/**
 * <Search>
 * [props]
 *
 * [event]
 *
 */

const Search = ({ ref, ...props }) => {
	const handleClick = () => {
		!props.readonly && props.onClick && props.onClick();
	};

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={classnames(props.role, props.className, { selected: props.children })}
			focused={props.children}
			inside={props.inside}
		>
			<button
				ref={ref}
				type="button"
				className={props.baseClassName}
				disabled={props.disabled}
				title={props.title}
				onClick={handleClick}
			>
				{props.children ? props.children : props.placeholder}
			</button>
			<i className={classnames('icon mask search x20', {
				disabled: props.readonly || props.disabled,
			})} />
		</UxGroup>
	);
};

/**
 * <Address>
 * [props]
 *
 * [event]
 *
 */

const Address = ({ ref, ...props }) => {
	const handleClick = () => {
		!props.readonly && props.onClick && props.onClick();
	};

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={classnames(props.role, props.className, { selected: props.children })}
			focused={props.children}
			inside={props.inside}
		>
			<button
				ref={ref}
				type="button"
				className={props.baseClassName}
				title={props.title}
				disabled={props.disabled}
				onClick={handleClick}
			>
				{props.children || props.placeholder}
			</button>
		</UxGroup>
	);
};

/**
 * <Input>
 * [props]
 *
 * [event]
 *
 */

const Input = ({ ref, ...props }) => {
	const handleClick = () => {
		!props.readonly && props.onClick && props.onClick();
	};

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={classnames(props.role, props.classname, { selected: props.children })}
			focused={props.children}
			inside={props.inside}
		>
			{
				props.prefix &&
				<span className={`${props.baseClassName}-prefix`}>
					{props.prefix}
				</span>
			}
			<button
				ref={ref}
				type="button"
				className={classnames(props.baseClassName, props.role)}
				title={props.title}
				disabled={props.disabled}
				onClick={handleClick}
			>
				{props.children || props.placeholder}
			</button>
			{
				props.suffix &&
				<span className={`${props.baseClassName}-suffix`}>
					{props.suffix}
				</span>
			}
		</UxGroup>
	);
};

/**
 * <Progress>
 * [props]
 *
 * [event]
 *
 */

const Progress = ({ ref, ...props }) => {
	const [progress, setProgress] = useState(props.progress || 0);

	const handleClick = () => {
		props.onClick && props.onClick();
	};

	useEffect(() => {
		setProgress(props.progress);
	}, [props.progress]);

	return (
		<button
			ref={ref}
			type="button"
			className={classnames(props.caseClassName, { loaded: props.loaded })}
			title={props.title}
			disabled={props.disabled}
			onClick={handleClick}
		>
			<span className={`${props.baseClassName}-base`}>
				{`${progress}%`}
			</span>
			<span className={`${props.baseClassName}-track`} >
				<span
					className={`${props.baseClassName}-gauge`}
					style={{ clipPath: `inset(0 ${100 - progress}% 0 0 round 1.6rem)` }}
				>
					<span className={`${props.baseClassName}-base inverse`} >
						{!props.loaded && `${progress}%`}
						{props.loaded && props.children}
					</span>
				</span>
			</span>
		</button>
	);
};

/**
 * <Link>
 * [props]
 *
 * [event]
 *
 */

const Link = ({ ref, ...props }) => {
	return (
		<a
			ref={ref}
			className={props.caseClassName}
			href={props.href}
			target={props.target}
			download={props.download}
		>
			{props.children}
		</a>
	);
};

/**
 * <Load>
 * [props]
 * className(String): 추가 클래스
 * title(String): 접근성 타이틀
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 */

const Load = ({ ref, ...props }) => {
	const handleClick = (event) => {
		props.onClick && props.onClick(event);
	};

	return (
		<button
			ref={ref}
			type="button"
			className={classnames(props.caseClassName, { loaded: props.loaded })}
			title={props.title}
			disabled={props.disabled}
			loaded={props.loaded}
			onClick={handleClick}
		>
			{
				!props.loaded &&
				<div className={`${props.baseClassName}-motion`} >
					<div className={`${props.baseClassName}-bullet`} >
						<div className={`${props.baseClassName}-item`} />
						<div className={`${props.baseClassName}-item`} />
						<div className={`${props.baseClassName}-item`} />
					</div>
				</div>
			}
			{props.loaded && props.children}
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
	const handleClick = (event) => {
		props.onClick && props.onClick(event);
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
			case 'tooltip':
				return <Tooltip ref={ref} {...props} />;
			case 'select':
				return <Select ref={ref} {...props} />;
			case 'search':
				return <Search ref={ref} {...props} />;
			case 'address':
				return <Address ref={ref} {...props} />;
			case 'input':
				return <Input ref={ref} {...props} />;
			case 'progress':
				return <Progress ref={ref} {...props} />;
			case 'load':
				return <Load ref={ref} {...props} />;
			case 'link':
				return <Link ref={ref} {...props} />;
			default:
				return <Default ref={ref} {...props} />;
		}
	};

	return getSlot();
};

export default UxButton;