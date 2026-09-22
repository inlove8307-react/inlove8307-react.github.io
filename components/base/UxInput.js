"use client";

import React, { useState, useEffect, useRef } from 'react';
import useModal from '@/hook/useModal';
import classnames from 'classnames';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGroup from '@/components/base/UxGroup';
import UxSelect from '@/components/base/UxSelect';
import UxOption from '@/components/base/UxOption';
/* POPUP */
import Datepicker from '@/components/popup/Datepicker';

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
	const [carrier, setCarrier] = useState(props.carrier || '');
	const [value1, setValue1] = useState(props.value1 || '');
	const [value2, setValue2] = useState(props.value2 || '');
	const [value3, setValue3] = useState(props.value3 || '');

	const handleClear = (event) => {
		setValue1('');
		setValue2('');
		setValue3('');
		setCarrier('');
		props.onClear && props.onClear(event);
	};

	const handleSubmit = (event) => {
		props.onSubmit && props.onSubmit(event);
	}

	useEffect(() => {
		props.onChange && props.onChange(value1, value2, value3, carrier);
	}, [value1, value2, value3, carrier]);

	useEffect(() => {
		if (typeof props.value1 === 'string' && props.value1 !== value1) {
			setValue1(props.value1);
		}
	}, [props.value1]);

	useEffect(() => {
		if (typeof props.value2 === 'string' && props.value2 !== value2) {
			setValue2(props.value2);
		}
	}, [props.value2]);

	useEffect(() => {
		if (typeof props.value3 === 'string' && props.value3 !== value3) {
			setValue3(props.value3);
		}
	}, [props.value3]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value1 || value2 || value3}
		>
			{
				props.carrier &&
				<UxSelect
					placeholder="통신사"
					value={carrier}
					inside
					readonly={props.readonly}
					disabled={props.disabled}
					onChange={(value) => setCarrier(value)}
				>
					<UxOption value="skt">SKT</UxOption>
					<UxOption value="kt">KT</UxOption>
					<UxOption value="lgu">LGU+</UxOption>
				</UxSelect>
			}
			<Input
				style={{ width: '3.2rem' }}
				placeholder="010"
				value={value1}
				maxLength={3}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue1(event.target.value)}
			/>
			<Input
				className="dash"
				style={{ width: '6rem' }}
				placeholder="0000"
				value={value2}
				maxLength={4}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue2(event.target.value)}
			/>
			<Input
				className="dash fill"
				placeholder="0000"
				value={value3}
				maxLength={4}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue3(event.target.value)}
			/>
			{
				props.clear && (value1 || value2 || value3) && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<i className="icon clear x20" />
				</UxButton>
			}
			{
				props.submit && !props.readonly && !props.disabled &&
				<UxButton
					className="tertiary small"
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
		props.onChange && props.onChange(value1, value2, value3);
	}, [value1, value2, value3]);

	useEffect(() => {
		if (typeof props.value1 === 'string' && props.value1 !== value1) {
			setValue1(props.value1);
		}
	}, [props.value1]);

	useEffect(() => {
		if (typeof props.value2 === 'string' && props.value2 !== value2) {
			setValue2(props.value2);
		}
	}, [props.value2]);

	useEffect(() => {
		if (typeof props.value3 === 'string' && props.value3 !== value3) {
			setValue3(props.value3);
		}
	}, [props.value3]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value1 || value2 || value3}
		>
			<Input
				style={{ width: '6.8rem'}}
				placeholder="000000"
				value={value1}
				maxLength={6}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue1(event.target.value)}
			/>
			{
				props.gender &&
				<Input
					className="dash"
					style={{ width: '2.6rem'}}
					placeholder="0"
					value={value2}
					maxLength={1}
					readonly={props.readonly}
					disabled={props.disabled}
					onChange={(event) => setValue2(event.target.value)}
				/>
			}
			<Masking
				className={classnames('fill', { dash: !props.gender })}
				value={props.gender ? value3 : value2}
				maxLength={props.gender ? 6 : 7}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => {
					props.gender
						? setValue3(event.target.value)
						: setValue2(event.target.value)
				}}
			/>
			{
				props.clear && (value1 || value2 || value3) && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<i className="icon clear x20" />
				</UxButton>
			}
			{
				props.submit && !props.readonly && !props.disabled &&
				<UxButton
					className="tertiary small"
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
		props.onChange && props.onChange(value1, value2, value3, value4);
	}, [value1, value2, value3, value4]);

	useEffect(() => {
		if (typeof props.value1 === 'string' && props.value1 !== value1) {
			setValue1(props.value1);
		}
	}, [props.value1]);

	useEffect(() => {
		if (typeof props.value2 === 'string' && props.value2 !== value2) {
			setValue2(props.value2);
		}
	}, [props.value2]);

	useEffect(() => {
		if (typeof props.value3 === 'string' && props.value3 !== value3) {
			setValue3(props.value3);
		}
	}, [props.value3]);

	useEffect(() => {
		if (typeof props.value4 === 'string' && props.value4 !== value4) {
			setValue4(props.value4);
		}
	}, [props.value4]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value1 || value2 || value3 || value4}
		>
			<Input
				style={{ width: '2.2rem' }}
				placeholder="00"
				value={value1}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue1(event.target.value)}
			/>
			<Input
				className="dash"
				style={{ width: '3.6rem' }}
				placeholder="00"
				value={value2}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue2(event.target.value)}
			/>
			<Masking
				className="dash"
				style={{ width: '8.2rem' }}
				value={value3}
				maxLength={6}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue3(event.target.value)}
			/>
			<Input
				className="dash fill"
				placeholder="00"
				value={value4}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue4(event.target.value)}
			/>
			{
				props.clear && (value1 || value2 || value3 || value4) && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<i className="icon clear x20" />
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
		if (typeof props.value1 === 'string' && props.value1 !== value1) {
			setValue1(props.value1);
		}
	}, [props.value1]);

	useEffect(() => {
		if (typeof props.value2 === 'string' && props.value2 !== value2) {
			setValue2(props.value2);
		}
	}, [props.value2]);

	useEffect(() => {
		if (typeof props.value3 === 'string' && props.value3 !== value3) {
			setValue3(props.value3);
		}
	}, [props.value3]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value1 || value2 || value3}
		>
			<Input
				style={{ width: '3.5rem' }}
				placeholder="000"
				value={value1}
				maxLength={3}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue1(event.target.value)}
			/>
			<Input
				className="dash"
				style={{ width: '3.7rem' }}
				placeholder="00"
				value={value2}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue2(event.target.value)}
			/>
			<Masking
				className="dash fill"
				value={value3}
				maxLength={5}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue3(event.target.value)}
			/>
			{
				props.clear && (value1 || value2 || value3) && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<i className="icon clear x20" />
				</UxButton>
			}
			{
				props.submit && !props.readonly && !props.disabled &&
				<UxButton
					className="tertiary small"
					onClick={handleSubmit}
				>
					{props.submit}
				</UxButton>
			}
		</UxGroup>
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
	const [value, setValue] = useState(props.value || '');

	const handleClear = (event) => {
		setValue('');
		props.onClear && props.onClear(event);
	};

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string' && props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value}
		>
			<Masking
				className="fill"
				placeholder={props.placeholder}
				value={value || ''}
				maxLength={props.maxLength}
				readonly={props.readonly}
				disabled={props.disabled}
				scrollIntoView={props.scrollIntoView}
				onChange={(event) => setValue(event.target.value)}
			/>
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<i className="icon clear x20" />
				</UxButton>
			}
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
	const [value, setValue] = useState(props.value || '');

	const handleClear = () => {
		setValue('');
		props.onClear && props.onClear('');
	};

	const handleSearch = () => {
		props.onSearch && props.onSearch(value);
	}

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string' && props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value}
		>
			<Input
				className="fill"
				placeholder={props.placeholder}
				value={value}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue(event.target.value)}
			/>
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<i className="icon clear x20" />
				</UxButton>
			}
			<UxButton
				onClick={handleSearch}
				disabled={props.readonly || props.disabled}
			>
				<i className={classnames('icon mask search', {
					disabled: props.readonly || props.disabled
				})} />
			</UxButton>
		</UxGroup>
	)
};

/**
 * <Address>
 * [props]
 *
 * [event]
 *
 */

const Address = ({ ref, ...props }) => {
	const [value, setValue] = useState(props.value || '');

	const handleClick = (event) => {
		props.onClick && props.onClick(event);
	}

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string' && props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={classnames(props.role, { selected: value })}
			focused={value}
		>
			<UxButton
				onClick={handleClick}
				disabled={props.readonly || props.disabled}
			>
				{ value ? value : props.placeholder }
			</UxButton>
		</UxGroup>
	)
};

/**
 * <DatePicker>
 * [props]
 *
 * [event]
 *
 */

const DatePicker = ({ ref, ...props }) => {
	const modal = useModal();
	const popup = modal.bottom;
	const [value, setValue] = useState(props.value || '');

	const handleClick = async () => {
		const result = await popup(Datepicker, {
			...props,
			value,
		});

		result?.value && setValue(result.value);
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
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value}
		>
			<Input
				className="fill"
				placeholder="YYYY.MM.DD"
				value={value}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue(event.target.value)}
			>
			</Input>
			<UxButton
				disabled={props.readonly || props.disabled}
				onClick={handleClick}
			>
				<i className={classnames('icon mask calendar', {
					disabled: props.readonly || props.disabled
				})} />
			</UxButton>
		</UxGroup>
	)
};

/**
 * <DateRange>
 * [props]
 *
 * [event]
 *
 */

const DateRange = ({ ref, ...props }) => {
	const modal = useModal();
	const popup = modal.bottom;
	const [from, setFrom] = useState(props.from || '');
	const [to, setTo] = useState(props.to || '');

	const handleClick = async (target) => {
		const isFrom = target === 'from';
		const value = isFrom ? from : to;
		const setDate = isFrom ? setFrom : setTo;

		const result = await popup(Datepicker, {
			...props,
			value,
		});

		result?.value && setDate(result?.value);
	};

	useEffect(() => {
		props.onChange && props.onChange(from, to);
	}, [from, to]);

	useEffect(() => {
		if (typeof props.from === 'string') {
			setFrom(props.from);
		}
	}, [props.from]);

	useEffect(() => {
		if (typeof props.to === 'string') {
			setTo(props.to);
		}
	}, [props.to]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={from || to}
		>
			<Input
				className="fill"
				placeholder="시작일"
				value={from}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setFrom(event.target.value)}
			>
			</Input>
			<UxButton
				disabled={props.readonly || props.disabled}
				onClick={() => handleClick('from')}
			>
				<i className={classnames('icon mask calendar', {
					disabled: props.readonly || props.disabled
				})} />
			</UxButton>
			<Input
				className="dash fill"
				placeholder="종료일"
				prefix="~"
				value={to}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setTo(event.target.value)}
			>
			</Input>
			<UxButton
				disabled={props.readonly || props.disabled}
				onClick={() => handleClick('to')}
			>
				<i className={classnames('icon mask calendar', {
					disabled: props.readonly || props.disabled
				})} />
			</UxButton>
		</UxGroup>
	)
};

/**
 * <Textarea>
 * [props]
 *
 * [event]
 *
 */

const Textarea = ({ ref, ...props }) => {
	const [value, setValue] = useState(props.value || '');
	const [count, setCount] = useState(value.length || 0);
	const inputRef = useRef();

	const handleChange = (event) => {
		if (props.fluid) {
			inputRef.current.style.height = "auto";
			inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
		}
		setValue(event.target.value);
		setCount(event.target.value.length);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	};

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	};

	const handleKeyUp = (event) => {
		props.onKeyUp && props.onKeyUp(event);
	};

	const handleKeyDown = (event) => {
		props.onKeyDown && props.onKeyDown(event);
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
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={props.role}
			focused={value}
		>
			<textarea
				ref={inputRef}
				className={`${props.baseClassName}-base`}
				placeholder={props.placeholder}
				value={value}
				rows={props.rows || '4'}
				maxLength={props.maxLength}
				readOnly={props.readonly}
				disabled={props.disabled}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyUp={handleKeyUp}
				onKeyDown={handleKeyDown}
			/>
			{
				props.maxLength &&
				<span className={`${props.baseClassName}-count`}>{count} / {props.maxLength}</span>
			}
		</UxGroup>
	);
};

/**
 * <File>
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

const File = ({ ref, ...props }) => {
	const baseClassName = "ux-file";
	const [value, setValue] = useState(props.value || '');
	const fileRef = useRef();

	const handleClick = (event) => {
		fileRef.current.click();
		props.onClick && props.onClick(event);
	}

	const handleChange = (event) => {
		const array = event.target.value.split("\\");
		!props.children && setValue(array[array.length - 1]);
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
		<UxGroup
			{...props}
			role="input"
			tag="label"
			className={classnames(props.role, { selected: value })}
			focused={value}
		>
			<input
				type="file"
				ref={fileRef}
				className={`${baseClassName}-base`}
				disabled={props.readonly || props.disabled}
				onChange={handleChange}
			/>
			<span className={classnames(`${baseClassName}-label`)}>
				{value || props.placeholder}
			</span>
			{
				!props.children &&
				<UxButton
					className={`${baseClassName}-button`}
					disabled={props.readonly || props.disabled}
					onClick={handleClick}
				>
					<i className={classnames('icon mask clip', {
						disabled: props.readonly || props.disabled
					})} />
				</UxButton>
			}
			{
				props.children &&
				mergeProps(props.children, {
					onClick: handleClick
				})
			}
		</UxGroup>
	);
};

/**
 * <Default>
 * [props]
 *
 * [event]
 *
 */

const Default = ({ ref, ...props }) => {
	const [value, setValue] = useState(props.value || '');

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
		if (typeof props.value === 'string' && props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<UxGroup
			{...props}
			role="input"
			tag="label"
			focused={value}
		>
			{
				props.prefix &&
				<span className={`${props.baseClassName}-prefix`}>
					{props.prefix}
				</span>
			}
			<Input
				className="fill"
				placeholder={props.placeholder}
				value={value}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(event) => setValue(event.target.value)}
			/>
			{props.children}
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxButton onClick={handleClear}>
					<i className="icon clear x20" />
				</UxButton>
			}
			{
				props.suffix &&
				<span className={`${props.baseClassName}-suffix`}>
					{props.suffix}
				</span>
			}
			{
				props.submit && !props.readonly && !props.disabled &&
				<UxButton
					className="tertiary small"
					onClick={handleSubmit}
				>
					{props.submit}
				</UxButton>
			}
		</UxGroup>
	)
};

/**
 * <Masking>
 * [props]
 *
 * [event]
 *
 */

const Masking = ({ ref, ...props }) => {
	const baseClassName = 'ux-masking';
	const caseClassName = classnames(baseClassName, props.className, {
		readonly: props.readonly,
		disabled: props.disabled
	});

	const Mask = (props) => {
		const baseClassName = 'ux-masking';
		const maxLength = props.maxLength || props.value.length;
		const maskRef = useRef([]);
		const array = (() => {
			let result = [];
			maskRef.current = [];

			while (result.length < maxLength) {
				result.length < props.value.length
					? result.push(true)
					: result.push(false);
			}

			return result;
		})();

		return (
			<div className={`${baseClassName}-mask`}>
				{array.map((enabled, index) => (
					<span
						key={index}
						ref={(element) => maskRef.current[index] = element}
						className={classnames(`${baseClassName}-item`, {enabled})}
					/>
				))}
			</div>
		);
	}

	const handleChange = (event) => {
		props.onChange && props.onChange(event);
	}

	return (
		<div
			ref={ref}
			className={caseClassName}
			style={props.style}
		>
			<div className={`${baseClassName}-wrap`}>
				<Mask
					{...props}
					value={props.value || ''}
				/>
				<input
					type={props.type || 'text'}
					className={`${baseClassName}-base`}
					placeholder={!props.maxLength ? props.placeholder : ''}
					value={props.value || ''}
					maxLength={props.maxLength}
					readOnly={props.readonly}
					disabled={props.disabled}
					onChange={handleChange}
				/>
			</div>
		</div>
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
	const baseClassName = 'ux-input';
	const caseClassName = classnames(baseClassName, props.className);

	const handleInput = (event) => {
		props.onInput && props.onInput(event);
	};

	const handleChange = (event) => {
		props.onChange && props.onChange(event);
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

	return (
		<div
			ref={ref}
			className={caseClassName}
			style={props.style}
		>
			<input
				type={props.type || 'text'}
				className={`${baseClassName}-base`}
				placeholder={props.placeholder}
				value={props.value || ''}
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
		</div>
	)
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
			case 'file':
				return <File {...props} />;
			case 'password':
				return <Password {...props} />;
			case 'textarea':
				return <Textarea {...props} />;
			case 'phone':
				return <Phone {...props} />;
			case 'resident':
				return <Resident {...props} />;
			case 'license':
				return <License {...props} />;
			case 'business':
				return <Business {...props} />;
			case 'search':
				return <Search {...props} />;
			case 'address':
				return <Address {...props} />;
			case 'datepicker':
				return <DatePicker {...props} />;
			case 'daterange':
				return <DateRange {...props} />;
			default:
				return <Default {...props} />;
		};
	};

	return getSlot(props.role);
};

export default UxInput;