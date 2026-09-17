"use client";

import React, { useState, useEffect } from 'react';
import { getArray } from '@/utils/core';
import useModal from "@/hook/useModal";
import classnames from 'classnames';
/* COMPONENT */
import UxGroup from '@/components/base/UxGroup';
import UxButton from '@/components/base/UxButton';
/* POPUP */
import Select from '@/components/popup/Select';
import SelectBank from '@/components/popup/SelectBank';
/* DATA */
import data from '@/public/data/code';

/**
 * <Bank>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const Bank = ({ ref, ...props }) => {
	const modal = useModal();
	const [sector, setSector] = useState(props.sector);
	const [code, setCode] = useState(props.code);
	const [name, setName] = useState();
	const [active, setActive] = useState(false);

	const handleClick = async (event) => {
		let result = {};

		setActive(true);
		props.onClick && props.onClick(event);

		result = await modal.bottom(SelectBank, {
			sector,
			code
		});

		if (result.sector && result.code) {
			setSector(result.sector);
			setCode(result.code);
		}

		setActive(false);
	};

	useEffect(() => {
		const filtered = data.filter(item => {
			return item.sector === sector && item.code === code;
		})[0];

		if (filtered) {
			setName(filtered.name);
		}
	}, [sector, code]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag={!props.inside && 'label'}
			className={classnames('select', { inside: props.inside })}
			focused={name}
		>
			<UxButton
				className={classnames({ selected: name })}
				disabled={props.readonly || props.disabled}
				onClick={handleClick}
			>
				{ !name && props.placeholder }
				{
					name &&
					<>
						<i className={`icons ${sector}-${code}`} />
						<span>{ name }</span>
					</>
				}
				<i className={classnames('icon mask arrow-down right x20', {
					vertical: active,
					disabled: props.readonly || props.disabled
				})} />
			</UxButton>
		</UxGroup>
	);
};

/**
 * <Default>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onClick(Func): 클릭 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 */

const Default = ({ ref, ...props }) => {
	const modal = useModal();
	const [value, setValue] = useState(props.value || '');
	const [label, setLabel] = useState();
	const [active, setActive] = useState(false);

	const handleClick = async (event) => {
		let result = {};

		setActive(true);
		props.onClick && props.onClick(event);

		result = await modal.bottom(Select, {
			value,
			options: props.children,
		});

		result.value && setValue(result.value);
		result.label && setLabel(result.label);

		setActive(false);
	};

	useEffect(() => {
		const filter = getArray(props.children).filter(item => value === item.props.value)[0];

		if (filter) {
			setLabel(filter?.props.children);
		}

		props.onChange && props.onChange(value, label);
	}, [value]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag={!props.inside && 'label'}
			className={classnames('select', { inside: props.inside })}
			focused={value}
		>
			<UxButton
				className={classnames({ selected: label })}
				disabled={props.readonly || props.disabled}
				onClick={handleClick}
			>
				{ !label && props.placeholder }
				{
					label &&
					<span className="text">
						{label}
					</span>
				}
				<i className={classnames('icon mask arrow-down right x20', {
					vertical: active,
					disabled: props.readonly || props.disabled
				})} />
			</UxButton>
		</UxGroup>
	);
};

const UxSelect = ({ ref, ...props }) => {
	const baseClassName = 'ux-input';
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
			case 'bank':
				return <Bank {...props} />;
			default:
				return <Default {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxSelect;