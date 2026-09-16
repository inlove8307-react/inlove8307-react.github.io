"use client";

import React from "react";
import { useRouter } from 'next/router';
import classnames from "classnames";
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxButton from "@/components/base/UxButton";

const UxHeader = ({ ref, ...props }) => {
	const baseClassName = 'ux-header';
	const caseClassName = classnames(baseClassName, props.className);
	const router = useRouter();

	return (
		<header className={caseClassName}>
			<UxSection>
				<UxArticle>
					<UxContent className="row space">
						<UxGroup className="gap8">
							<UxButton>
								<i className="icon menu" />
							</UxButton>
							<UxButton onClick={() => router.push('/')}>
								<span className="text">HOME</span>
							</UxButton>
							<UxButton onClick={() => router.push('/view/guide/button')}>
								<span className="text">GUIDE</span>
							</UxButton>
							<UxButton onClick={() => router.push('/view/icons')}>
								<span className="text">ICONS</span>
							</UxButton>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
		</header>
	)
};

export default UxHeader;