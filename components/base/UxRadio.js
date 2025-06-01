import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxRadio>
 * [props]
 *
 * [event]
 *
 */

const UxRadio = (props, ref) => {
	const baseClassName = 'ux-radio';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);
	const [name, setName] = useState(props.name || '');

	const handleChange = () => {
		props.onChange && props.onChange(props.value);
	};

	useEffect(() => {
		if (!name) {
			setName(props.randomChar);
		}
	}, [props.randomChar]);

	useEffect(() => {
		setChecked(props.value === props.selected);
	}, [props.selected]);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, { checked })}
		>
			<label className={`${baseClassName}-base`}>
				<input
					type="radio"
					className={`${baseClassName}-input`}
					name={name}
					value={props.value}
					checked={checked}
					disabled={props.disabled}
					onChange={handleChange}
				/>
				<UxIcon
					className="i009"
					size="2.4rem"
				/>
				<span className={`${baseClassName}-label`}>
					{props.children}
				</span>
			</label>
		</div>
	);
};

export default React.forwardRef(UxRadio);