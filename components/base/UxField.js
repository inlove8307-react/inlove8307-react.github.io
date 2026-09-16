"use client";

import React from 'react';
import classnames from 'classnames';
import { getArray, mergeProps } from '@/utils/core';

/**
 * <UxField>
 * [props]
 *
 * [event]
 *
 */

const UxField = ({ ref, ...props }) => {
	const baseClassName = 'ux-field';
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
	});

	return (
		<div className={caseClassName}>
			{
				getArray(props.children).map((element, index) => {
					if (typeof element.type === 'function') {
						const options = { key: index };

						if (props.valid !== undefined) {
							options.valid = props.valid;
						}

						return mergeProps(element, options);
					}
					else {
						switch (element.props.slot) {
							case 'label':
								return mergeProps(element, {
									key: index,
									className: `${baseClassName}-label`,
								});
							case 'message':
								return mergeProps(element, {
									key: index,
									className: `${baseClassName}-message`,
								});
							case 'valid':
								return (
									<p
										key={index}
										className={`${baseClassName}-valid`}
									>
										<i className={classnames('icons valid x20', { invalid: props.valid === false })} />
										{ element.props.children }
									</p>
								);
							default:
								return element;
						}
					}
				})
			}
		</div>
	);
};

export default UxField;