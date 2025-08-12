"use client";

import React from "react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxGrid from "@/components/base/UxGrid";
import UxButton from "@/components/base/UxButton";
import UxIcon from "@/components/base/UxIcon";

const UxHeader = ({ ref, ...props }) => {
	const baseClassName = 'ux-header';
	const caseClassName = classnames(baseClassName, props.className);

	const handleClick = () => {
		props.onClick(!props.active);
	}

	return (
		<header className={caseClassName}>
			<UxSection>
				<UxArticle>
					<UxContent className="row space">
						<UxGrid className="gap12">
							<UxButton onClick={handleClick}>
								<UxIcon className="i109" />
							</UxButton>
							<span>GUIDE</span>
						</UxGrid>
					</UxContent>
				</UxArticle>
			</UxSection>
		</header>
	)
};

export default UxHeader;