import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';
import UxInput from '@/components/base/UxInput';
import UxPassword from '@/components/base/UxPassword';

/**
 * <UxLrn> (운전면허번호)
 * [props]
 *
 * [event]
 *
 */

const UxLrn = ({ ref, ...props }) => {
	const baseClassName = 'ux-input-group';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
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
	}, [props.value1, props.value2, props.value3]);

	return (
		<div
			ref={ref}
			className={caseClassName}
			style={props.style}
		>
			<UxInput
				style={{ width: '1.8rem' }}
				placeholder="00"
				value={value1}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue1(value)}
			/>
			<UxInput
				className="dash"
				style={{ width: '3.2rem' }}
				placeholder="00"
				value={value2}
				maxLength={2}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue2(value)}
			/>
			<UxPassword
				className="dash"
				style={{ width: '8.2rem' }}
				value={value3}
				maxLength={6}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={(value) => setValue3(value)}
			/>
			<UxInput
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
		</div>
	)
};

export default UxLrn;