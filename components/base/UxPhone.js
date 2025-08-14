"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';
import UxInput from '@/components/base/UxInput';
import UxGroup from '@/components/base/UxGroup';

/**
 * <UxPhone>
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value1(String): 첫번째 값
 * value2(String): 두번째 값
 * value3(String): 세번째 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 * onSubmit(Func): 확인 버튼 이벤트 콜백
 */

const UxPhone = ({ ref, ...props }) => {
	const [value1, setValue1] = useState(props.value1 || '');
	const [value2, setValue2] = useState(props.value2 || '');
	const [value3, setValue3] = useState(props.value3 || '');

	const handleClear = (event) => {
		setValue1('');
		setValue2('');
		setValue3('');
		props.onClear && props.onClear(event);
	};

	const handleSubmit = (event) => {
		props.onSubmit && props.onSubmit(event);
	}

	useEffect(() => {
		props.onChange && props.onChange(value1, value2, value3);
	}, [value1, value2, value3]);

	useEffect(() => {
		if (props.value === 'string') {
			setValue1(props.value1);
			setValue2(props.value2);
			setValue3(props.value3);
		}
	}, [props.value1, props.value2, props.value3]);

	return (
		<UxGroup
			role="input"
			className={classnames(props.className, {
				valid: props.valid === true,
				invalid: props.valid === false,
				readonly: props.readonly,
				disabled: props.disabled
			})}
			placeholder={(!value1 && !value2 && !value2) && props.placeholder}
		>
			<UxInput
				className="fix"
				style={{ width: '2.8rem' }}
				placeholder="010"
				value={value1}
				maxLength={3}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue1(value)}
			/>
			<UxInput
				className="fix dash"
				style={{ width: '5rem' }}
				placeholder="0000"
				value={value2}
				maxLength={4}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue2(value)}
			/>
			<UxInput
				className="dash last"
				placeholder="0000"
				value={value3}
				maxLength={4}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue3(value)}
			/>
			{
				props.clear && (value1 || value2 || value3) && !props.readonly && !props.disabled &&
				<UxIcon
					title="initialize"
					tagName="button"
					className="i110"
					onClick={handleClear}
				/>
			}
			{
				props.submit && !props.readonly && !props.disabled &&
				<UxButton
					className="submit"
					onClick={handleSubmit}
				>
					{props.submit}
				</UxButton>
			}
		</UxGroup>
	)
};

export default UxPhone;