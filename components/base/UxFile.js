"use client";

import React, { useState, useRef, useEffect } from 'react';
import { mergeProps } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxFile>
 * [props]
 *
 * [event]
 *
 */

const UxFile = ({ ref, ...props }) => {
	const baseClassName = "ux-file";
	const caseClassName = classnames(baseClassName, props.className, { default: !props.children });
	const fileRef = useRef();
	const [path, setPath] = useState("");
	const children = useRef();

	const handleClick = (event) => {
		fileRef.current.click();
		props.onClick && props.onClick(event);
	}

	const handleChange = (event) => {
		const array = event.target.value.split("\\");
		!props.children && setPath(array[array.length - 1]);
		props.onChange && props.onChange(event);
	}

	useEffect(() => {
		if (React.isValidElement(props.children)) {
			children.current = mergeProps(props.children, { onClick: handleClick });
		}
	}, []);

	return (
		<div className={caseClassName}>
			<div className={`${baseClassName}-base`}>
				<input
					type="file"
					ref={fileRef}
					className={`${baseClassName}-input`}
					onChange={handleChange}
				/>
				<span className={classnames(`${baseClassName}-label`, {path: path})}>
					{path || props.placeholder}
				</span>
			</div>
			{
				!children.current &&
				<button
					type="button"
					className={`${baseClassName}-button`}
					onClick={handleClick}
				>
					파일
				</button>
			}
			{children.current && children.current}
		</div>
	);
};

export default UxFile;