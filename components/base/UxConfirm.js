"use client";

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxSubject from '@/components/layout/UxSubject';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGrid from '@/components/base/UxGrid';
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
						<UxGrid className="gap8">
							<UxButton
								className="contain h3 grow small"
								onClick={props.onClose}
							>
								취소
							</UxButton>
							<UxButton
								className="primary h3 grow full"
								onClick={props.onClose}
							>
								확인
							</UxButton>
						</UxGrid>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	)
};

export default UxConfirm;