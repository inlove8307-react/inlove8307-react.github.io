"use client";

import React from "react";
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGrid from '@/components/base/UxGrid';
import UxIcon from '@/components/base/UxIcon';

const Popup = ({ ref, ...props }) => {
	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxContent>
						<h4>알림</h4>
						<UxButton onClick={props.onClose}>
							<UxIcon className="i303 w28" />
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle>
					<UxContent>
						popup
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						<UxGrid className="gap8">
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

export default Popup;