import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxMaskingMask>
 * [props]
 *
 * [event]
 *
 */

const UxMaskingMask = (props) => {
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

	const setScroll = () => {
		const element = maskRef.current[maskRef.current.length - 1];

		if (!element) return;

		setTimeout(() => {
			element.scrollIntoView({
				block: 'nearest',
				inline: 'center',
				behavior: 'smooth'
			});
		}, 1);
	};

	useEffect(() => {
		props.scrollIntoView && setScroll();
	}, [props.value]);

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

/**
 * <UxMasking>
 * [props]
 *
 * [event]
 *
 */

const UxMasking = (props, ref) => {
	const baseClassName = 'ux-masking';
	const caseClassName = classnames(baseClassName, props.className, {
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');
	const [placeholder] = useState(!props.maxLength ? props.placeholder : '');

	const handleChange = (event) => {
		setValue(event.target.value);
		props.onChange && props.onChange(event);
	}

	useEffect(() => {
		if (typeof props.value === 'string') {
			setValue(props.value);
		}
	}, [props.value]);

	return (
		<div
			ref={ref}
			className={caseClassName}
		>
			<UxMaskingMask
				{...props}
				value={value}
			/>
			<input
				type={props.type || 'text'}
				placeholder={placeholder}
				className={`${baseClassName}-input`}
				value={value}
				maxLength={props.maxLength}
				readOnly={props.readonly}
				disabled={props.disabled}
				onChange={handleChange}
			/>
		</div>
	);
};

export default React.forwardRef(UxMasking);