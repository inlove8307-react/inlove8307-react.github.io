"use client";

import React, { useEffect, useState } from 'react';
import { getArray, mergeProps } from '@/utils/core';
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from "@/components/base/UxButton";
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

	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxSubject>
						<h3>{props.title || '선택'}</h3>
						<UxButton onClick={props.onClose}>
							<i className="icon close" />
						</UxButton>
					</UxSubject>
				</UxArticle>
			</UxSection>
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
		</>
	);
};

export default Popup;