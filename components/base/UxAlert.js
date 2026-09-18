"use client";

import React from 'react';
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxSubject from '@/components/layout/UxSubject';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGroup from '@/components/base/UxGroup';

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
					<UxSubject>
						<h3>{props.title || '알림'}</h3>
						<UxButton onClick={props.onClose}>
							<i className="icon close" />
						</UxButton>
					</UxSubject>
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
						<UxGroup>
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