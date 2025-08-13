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
 * <UxConfirm>
 * [props]
 *
 * [event]
 *
 */

const UxConfirm = ({ ref, ...props }) => {
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
								className="contain h3 small"
								onClick={props.onClose}
							>
								취소
							</UxButton>
							<UxButton
								className="primary h3"
								onClick={props.onClose}
							>
								확인
							</UxButton>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	)
};

export default UxConfirm;