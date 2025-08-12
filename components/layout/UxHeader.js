"use client";

import React from "react";
import classnames from "classnames";
import Link from 'next/link'
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxGrid from "@/components/base/UxGrid";

const UxHeader = ({ ref, ...props }) => {
	const baseClassName = 'ux-header';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<header className={caseClassName}>
			<UxSection>
				<UxArticle>
					<UxContent className="row space">
						<UxGrid className="gap8">
							<Link href="/view/guide">GUIDE</Link>
							<Link href="/view/icons">ICONS</Link>
						</UxGrid>
					</UxContent>
				</UxArticle>
			</UxSection>
		</header>
	)
};

export default UxHeader;