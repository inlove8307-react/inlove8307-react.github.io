"use client";

import React, { useEffect } from "react";
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGroup from '@/components/base/UxGroup';

const Popup = ({ ref, ...props }) => {
	useEffect(() => {
		const modalRect = props.modalRef.current.getBoundingClientRect();
		const baseRect = props.baseRef.current.getBoundingClientRect();
		const openerRect = props.openerRef.current.getBoundingClientRect();
		const gap = 4;
		const offset = {
			width: openerRect.width,
			x: openerRect.left,
			y: openerRect.top + openerRect.height + gap,
		};

		if (modalRect.height < offset.y + baseRect.height) {
			offset.y = openerRect.top - baseRect.height - gap;
		}

		Object.assign(props.baseRef.current.style, {
			transform: `translate(${offset.x}px, ${offset.y}px)`
		});
	}, []);

	return (
		<UxGroup className="auto">
			<div className="content">
				{props.content}
			</div>
			<UxButton
				onClick={props.onClose}
			>
				<i className="icon mask close x16" />
			</UxButton>
		</UxGroup>
	)
};

export default Popup;