import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import Link from 'next/link'
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxHeader = ({ ref, ...props }) => {
	const originClassName = 'ux-header';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<header className={mixinClassName}>
			<UxSection>
				<UxArticle>
					<UxContent className="row">
						<Link href="/">HOME</Link>
						<Link href="/view/guide">GUIDE</Link>
						<Link href="/view/icons">ICONS</Link>
					</UxContent>
				</UxArticle>
			</UxSection>
		</header>
	)
};

export default UxHeader;