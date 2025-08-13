"use client";

import React from 'react';
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGroup from '@/components/base/UxGroup';
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxAlert>
 * [props]
 *
 * [event]
 *
 */

const UxAlert = ({ ref, ...props }) => {
	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxContent>
						<h4>{props.title || '알림'}</h4>
						<UxButton onClick={props.onClose}>
							<UxIcon className="i303 w28" />
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle>
					<UxContent>
						{props.message}
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						<UxGroup className="gap8">
							<UxButton
								className="primary h3"
								onClick={props.onClose}
							>
								<span className="text">확인</span>
							</UxButton>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	)
};

export default UxAlert;