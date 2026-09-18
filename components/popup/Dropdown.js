"use client";

import React, { useEffect, useState, useRef } from 'react';
import { getArray, mergeProps } from '@/utils/core';
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";

/**
 * <Popup>
 * [props]
 * [event]
 */

const Popup = ({ ref, ...props }) => {
	const handleClick = (value) => {
		props.onClose({ value });
	};

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
			minWidth: `${offset.width}px`,
			transform: `translate(${offset.x}px, ${offset.y}px)`
		});
	}, []);

	return (
		<UxSection>
			<UxArticle>
				<UxContent>
					<UxGroup className="col1 gap0">
						{
							getArray(props.options).map((item, index) => {
								const selected = item.props.value === props.value;

								return mergeProps(item, {
									key: index,
									selected,
									onClick: handleClick,
								});
							})
						}
					</UxGroup>
				</UxContent>
			</UxArticle>
		</UxSection>
	);
};

export default Popup;