"use client";

import React, { useState, useEffect } from 'react';
import { getRandomChar } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';
import UxGroup from '@/components/base/UxGroup';
import UxMasking from '@/components/base/UxMasking';

/**
 * <Phone>
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

const Phone = ({ ref, ...props }) => {
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
			<Input
				className="fix"
				style={{ width: '2.8rem' }}
				placeholder="010"
				value={value1}
				maxLength={3}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue1(value)}
			/>
			<Input
				className="fix dash"
				style={{ width: '5rem' }}
				placeholder="0000"
				value={value2}
				maxLength={4}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue2(value)}
			/>
			<Input
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
				<UxButton onClick={handleClear}>
					<UxIcon className="i110" />
				</UxButton>
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

/**
 * <Resident> (주민등록번호)
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value1(String): 첫번째 값
 * value2(String): 두번째 값
 * value3(String): 세번째 값
 * gender(Boolean): 성별 값 마스킹 여부
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 * onSubmit(Func): 확인 버튼 이벤트 콜백
 */

const Resident = ({ ref, ...props }) => {
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
		props.onChange && props.onChange({ value1, value2, value3 });
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
			className={classnames({
				valid: props.valid === true,
				invalid: props.valid === false,
				readonly: props.readonly,
				disabled: props.disabled
			})}
			placeholder={(!value1 && !value2 && !value3) && props.placeholder}
		>
			<Input
				className="fix"
				style={{ width: '5.2rem'}}
				placeholder="000000"
				value={value1}
				maxLength={6}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue1(value)}
			/>
			{
				props.gender &&
				<Input
					className="fix dash"
					style={{ width: '2.25rem'}}
					placeholder="0"
					value={value2}
					maxLength={1}
					readonly={props.readonly}
					disabled={props.disabled}
					onChange={(value) => setValue2(value)}
				/>
			}
			<Password
				className={classnames('last', { dash: !props.gender })}
				value={props.gender ? value3 : value2}
				maxLength={props.gender ? 6 : 7}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => {
					props.gender
						? setValue3(value)
						: setValue2(value)
				}}
			/>
			{
				props.clear && (value1 || value2) && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<UxIcon className="i110" />
				</UxButton>
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

/**
 * <License> (운전면허번호)
 * [props]
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value1(String): 첫번째 값
 * value2(String): 두번째 값
 * value3(String): 세번째 값
 * value4(String): 네번째 값
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 * onSubmit(Func): 확인 버튼 이벤트 콜백
 */

const License = ({ ref, ...props }) => {
	const [value1, setValue1] = useState(props.value1 || '');
	const [value2, setValue2] = useState(props.value2 || '');
	const [value3, setValue3] = useState(props.value3 || '');
	const [value4, setValue4] = useState(props.value4 || '');

	const handleClear = (event) => {
		setValue1('');
		setValue2('');
		setValue3('');
		setValue4('');
		props.onClear && props.onClear(event);
	};

	const handleSubmit = (event) => {
		props.onSubmit && props.onSubmit(event);
	}

	useEffect(() => {
		props.onChange && props.onChange({ value1, value2, value3, value4 });
	}, [value1, value2, value3, value4]);

	useEffect(() => {
		if (props.value === 'string') {
			setValue1(props.value1);
			setValue2(props.value2);
			setValue3(props.value3);
			setValue4(props.value4);
		}
	}, [props.value1, props.value2, props.value3, props.value4]);

	return (
		<UxGroup
			role="input"
			className={classnames({
				valid: props.valid === true,
				invalid: props.valid === false,
				readonly: props.readonly,
				disabled: props.disabled
			})}
			placeholder={(!value1 && !value2 && !value3 && !value4) && props.placeholder}
		>
			<Input
				className="fix"
				style={{ width: '1.8rem' }}
				placeholder="00"
				value={value1}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue1(value)}
			/>
			<Input
				className="fix dash"
				style={{ width: '3.2rem' }}
				placeholder="00"
				value={value2}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue2(value)}
			/>
			<Password
				className="fix dash"
				style={{ width: '8.2rem' }}
				value={value3}
				maxLength={6}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue3(value)}
			/>
			<Input
				className="dash last"
				placeholder="00"
				value={value4}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue4(value)}
			/>
			{
				props.clear && (value1 || value2 || value3 || value4) && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<UxIcon className="i110" />
				</UxButton>
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

/**
 * <Business> (사업자등록번호)
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

const Business = ({ ref, ...props }) => {
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
			className={classnames({
				valid: props.valid === true,
				invalid: props.valid === false,
				readonly: props.readonly,
				disabled: props.disabled
			})}
			placeholder={(!value1 && !value2 && !value3) && props.placeholder}
		>
			<Input
				className="fix"
				style={{ width: '2.8rem' }}
				placeholder="000"
				value={value1}
				maxLength={3}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue1(value)}
			/>
			<Input
				className="fix dash"
				style={{ width: '3.2rem' }}
				placeholder="00"
				value={value2}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue2(value)}
			/>
			<Password
				className="dash last"
				value={value3}
				maxLength={5}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue3(value)}
			/>
			{
				props.clear && (value1 || value2 || value3) && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<UxIcon className="i110" />
				</UxButton>
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

/**
 * <Input>
 * [props]
 * type(String): 입력 타입 (기본 'text')
 * style(Object): 인라인 스타일
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * prefix(String): 앞 표시 문구
 * suffix(String): 뒤 표시 문구
 * value(String): 값
 * maxLength(String): 글자 수 제한
 * clear(Boolean): 값 초기화 버튼 활성화 여부
 * submit(String): 확인 버튼 문구
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onInput(Func): 값 입력 이벤트 콜백
 * onFocus(Func): 포커스 활성화 이벤트 콜백
 * onBlur(Func): 포커스 비활성화 이벤트 콜백
 * onKeyDown(Func): 키 입력 이벤트 콜백
 * onKeyUp(Func): 키 입력 후 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 * onSubmit(Func): 확인 버튼 이벤트 콜백
 */

const Input = ({ ref, ...props }) => {
	const baseClassName = 'ux-input';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');

	const handleInput = (event) => {
		props.onInput && props.onInput(event);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	};

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	};

	const handleKeyDown = (event) => {
		props.onKeyDown && props.onKeyDown(event);
	};

	const handleKeyUp = (event) => {
		props.onKeyUp && props.onKeyUp(event);
	};

	const handleClear = (event) => {
		setValue('');
		props.onClear && props.onClear(event);
	};

	const handleSubmit = (event) => {
		props.onSubmit && props.onSubmit(event);
	}

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<div
			ref={ref}
			className={caseClassName}
			style={props.style}
		>
			<span className={`${baseClassName}-prefix`}>
				{props.prefix}
			</span>
			<input
				type={props.type || 'text'}
				className={`${baseClassName}-base`}
				placeholder={props.placeholder}
				value={value}
				maxLength={props.maxLength}
				readOnly={props.readonly}
				disabled={props.disabled}
				onInput={handleInput}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
			/>
			{props.children}
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<UxIcon className="i110" />
				</UxButton>
			}
			<span className={`${baseClassName}-suffix`}>
				{props.suffix}
			</span>
			<span className={`${baseClassName}-timer`}>
				{props.timer}
			</span>
			{
				props.submit && !props.readonly && !props.disabled &&
				<UxButton
					className="submit"
					onClick={handleSubmit}
				>
					{props.submit}
				</UxButton>
			}
		</div>
	)
};

/**
 * <Password>
 * [props]
 * style(Object): 인라인 스타일
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * value(String): 값
 * maxLength(String): 글자 수 제한
 * scrollIntoView(Boolean): 값 입력 시 스크롤 여부
 * clear(Boolean): 값 초기화 버튼 활성화 여부
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 */

const Password = ({ ref, ...props }) => {
	const baseClassName = 'ux-password';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleClear = (event) => {
		setValue('');
		props.onClear && props.onClear(event);
	};

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<div
			ref={ref}
			className={caseClassName}
			style={props.style}
		>
			<UxMasking
				placeholder={props.placeholder}
				value={value}
				maxLength={props.maxLength}
				readonly={props.readonly}
				disabled={props.disabled}
				scrollIntoView={props.scrollIntoView}
				onChange={handleChange}
			/>
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<UxIcon className="i110" />
				</UxButton>
			}
		</div>
	);
};

/**
 * <UxInput>
 * [props]
 * type(String): 입력 타입 (기본 'text')
 * style(Object): 인라인 스타일
 * className(String): 추가 클래스
 * placeholder(String): 값 없을 경우 표시 문구
 * prefix(String): 앞 표시 문구
 * suffix(String): 뒤 표시 문구
 * value(String): 값
 * maxLength(String): 글자 수 제한
 * clear(Boolean): 값 초기화 버튼 활성화 여부
 * submit(String): 확인 버튼 문구
 * valid(Boolean): 유효성 여부
 * readonly(Boolean): 읽기전용 여부
 * disabled(Boolean): 비활성화 여부
 * [event]
 * onInput(Func): 값 입력 이벤트 콜백
 * onFocus(Func): 포커스 활성화 이벤트 콜백
 * onBlur(Func): 포커스 비활성화 이벤트 콜백
 * onKeyDown(Func): 키 입력 이벤트 콜백
 * onKeyUp(Func): 키 입력 후 이벤트 콜백
 * onChange(Func): 값 변경 이벤트 콜백
 * onClear(Func): 값 초기화 이벤트 콜백
 * onSubmit(Func): 확인 버튼 이벤트 콜백
 */

const UxInput = ({ ref, ...props }) => {
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
			case 'phone':
				return <Phone {...props} />;
			case 'resident':
				return <Resident {...props} />;
			case 'license':
				return <License {...props} />;
			case 'business':
				return <Business {...props} />;
			case 'password':
				return <Password {...props} />;
			default:
				return <Input {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxInput;