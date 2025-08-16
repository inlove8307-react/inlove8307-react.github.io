"use client";

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxRadio>
 * [props]
 * className(String): 추가 클래스
 * value(String): 값
 * selected(String): 선택 값
 * scroll(Boolean): 스크롤 여부
 * expanded(Boolean): 확장 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 선택 변경 이벤트 콜백
 */

const UxRadio = ({ ref, ...props }) => {
	const baseClassName = 'ux-radio';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);
	const [name, setName] = useState(props.name || '');
	const labelRef = useRef();

	const handleChange = () => {
		setScroll();
		props.onChange && props.onChange(props.value);
	};

	const setScroll = () => {
		if (props.scroll) {
			labelRef.current.scrollIntoView({
				block: "nearest",
				inline: "center",
				behavior: "smooth"
			});
		}
	};

	useEffect(() => {
		if (!name) {
			setName(props.randomChar);
		}
	}, [props.randomChar]);

	useEffect(() => {
		if (!props.expanded && checked) {
			setScroll();
		}
	}, [props.expanded]);

	useEffect(() => {
		setChecked(props.value === props.selected);
	}, [props.selected]);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, { checked })}
		>
			<label
				ref={labelRef}
				className={`${baseClassName}-base`}>
				<input
					type="radio"
					className={`${baseClassName}-input`}
					name={name}
					value={props.value}
					checked={checked}
					disabled={props.disabled}
					onChange={handleChange}
				/>
				<UxIcon className="i197 w24" />
				<span className={`${baseClassName}-label`}>
					{props.children}
				</span>
			</label>
		</div>
	);
};

export default UxRadio;