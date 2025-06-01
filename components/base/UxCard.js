import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxCard>
 * [props]
 *
 * [event]
 *
 */

const UxCard = (props, ref) => {
	const baseClassName = 'ux-card';
	const caseClassName = classnames(baseClassName, props.className, { disabled: props.disabled });
	const [checked, setChecked] = useState(props.checked || false);
	const [name, setName] = useState(props.name || '');

	const handleChange = (event) => {
		if (props.type === 'checkbox') {
			setChecked(event.target.checked);
		}
		if (props.type === 'radio') {
			props.onChange && props.onChange(props.value);
		}
	};

	useEffect(() => {
		if (!name) {
			setName(props.randomChar);
		}
	}, [props.randomChar]);

	useEffect(() => {
		if (props.type === 'radio') {
			setChecked(props.value === props.selected);
		}
	}, [props.selected]);

	useEffect(() => {
		if (props.type === 'checkbox') {
			props.onChange && props.onChange(checked);
		}
	}, [checked]);

	return (
		<div
			ref={ref}
			className={classnames(caseClassName, { checked })}
		>
			{(props.type === 'radio' || props.type === 'checkbox') &&
				<label className={`${baseClassName}-base`}>
					<input
						type={props.type}
						className={`${baseClassName}-input`}
						name={name}
						value={props.value}
						checked={checked}
						disabled={props.disabled}
						onChange={handleChange}
					/>
				</label>
			}
			<span className={`${baseClassName}-label`}>
				{props.children}
			</span>
		</div>
	);
};

export default React.forwardRef(UxCard);