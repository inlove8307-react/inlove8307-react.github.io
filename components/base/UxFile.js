"use client";

import React, { useState, useRef } from 'react';
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
	const fileRef = useRef();
	const [path, setPath] = useState("");

	const handleClick = (event) => {
		fileRef.current.click();
		props.onClick && props.onClick(event);
	}

	const handleChange = (event) => {
		const array = event.target.value.split("\\");
		!props.children && setPath(array[array.length - 1]);
		props.onChange && props.onChange(event);
	}

	return (
		<div className={classnames(baseClassName, props.className, {
			slot: props.children
		})}>
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
				!props.children &&
				<button
					type="button"
					className={`${baseClassName}-button`}
					onClick={handleClick}
				>
					<span className="text">파일첨부</span>
				</button>
			}
			{
				props.children &&
				mergeProps(props.children, {
					onClick: handleClick
				})
			}
		</div>
	);
};

export default UxFile;