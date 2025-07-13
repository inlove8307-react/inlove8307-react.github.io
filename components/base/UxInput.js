import React, { useState, useEffect } from 'react';
import { getRandomChar } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';

/**
 * <UxInput>
 * [props]
 *
 * [event]
 *
 */

const UxInput = ({ ref, ...props }) => {
	const baseClassName = 'ux-input';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');
	const [name, setName] = useState(props.name || '');

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
		if (!name) {
			setName(getRandomChar());
		}
	}, []);

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<label
			ref={ref}
			className={caseClassName}
			style={props.style}
		>
			{
				props.prefix &&
				<span
					className={`${baseClassName}-prefix`}
				>
					{props.prefix}
				</span>
			}
			<input
				type={props.type || 'text'}
				className={`${baseClassName}-base`}
				placeholder={props.placeholder}
				name={name}
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
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxIcon
					title="initialize"
					tagName="button"
					className="i110"
					onClick={handleClear}
				/>
			}
			{
				props.suffix &&
				<span
					className={`${baseClassName}-suffix`}
				>
					{props.suffix}
				</span>
			}
			{
				props.timer &&
				<span
					className={`${baseClassName}-timer`}
				>
					{props.timer}
				</span>
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
		</label>
	)
};

export default UxInput;