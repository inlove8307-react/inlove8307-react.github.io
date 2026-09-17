"use client";

import React from 'react';
import { getArray, mergeProps } from '@/utils/core';
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

/**
 * <Popup>
 * [props]
 * [event]
 */

const Popup = ({ ref, ...props }) => {
	const baseClassName = 'ux-options';

	const handleClick = (value, label) => {
		props.onClose({ value, label })
	};

	return (
		<UxSection className="options">
			<UxArticle>
				<UxContent className="space">
					<ul className={baseClassName}>
						{
							getArray(props.options).map((item, index) => {
								const selected = item.props.value === props.value;

								return (
									<li key={index}>
										{mergeProps(item, {
											selected,
											onClick: handleClick,
										})}
									</li>
								);
							})
						}
					</ul>
				</UxContent>
			</UxArticle>
		</UxSection>
	);
};

export default Popup;