"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import useModal from "@/hook/useModal";
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxPopoverBase>
 * [props]
 *
 * [event]
 *
 */

const UxPopoverBase = ({ ref, ...props }) => {
	const baseClassName = 'ux-popover';
	const [style, setStyle] = useState({});

	useEffect(() => {
		console.log(props);
		setStyle({
			top: `${props.rect.top + props.rect.height}px`,
			left: `0`,
		});
	}, []);

	return (
		<div
			className={`${baseClassName}-base`}
			style={style}
		>
			<div className={`${baseClassName}-content`}>
				{props.content}
			</div>
			<button
				className={`${baseClassName}-closer`}
				onClick={props.onClose}
			>
				<UxIcon className="i303 w20" />
			</button>
		</div>
	);
};

/**
 * <UxPopover>
 * [props]
 *
 * [event]
 *
 */

const UxPopover = ({ ref, ...props }) => {
	const baseClassName = 'ux-popover';
	const caseClassName = classnames(baseClassName, props.className);
	const modal = useModal();
	const buttonRef = useRef();

	const handleClick = () => {
		modal.popover(UxPopoverBase, {
			content: props.children,
			rect: buttonRef.current.getBoundingClientRect(),
		});
	};

	return (
		<div className={caseClassName}>
			<button
				ref={buttonRef}
				className={`${baseClassName}-opener`}
				onClick={handleClick}
			>
				<UxIcon className="i344 w24" />
			</button>
		</div>
	);
};

export default UxPopover;