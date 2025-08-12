"use client";

import React from "react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxButton from "@/components/base/UxButton";
import UxIcon from "@/components/base/UxIcon";

const UxHeader = ({ ref, ...props }) => {
	const baseClassName = 'ux-header';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<header className={caseClassName}>
			<UxSection>
				<UxArticle>
					<UxContent className="row space">
						<UxButton>
							<UxIcon className="i109" />
							<span className="text">GUIDE</span>
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxSection>
		</header>
	)
};

export default UxHeader;