import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxBreadcrumb = ({ ref, ...props }) => {
	const originClassName = 'ux-breadcrumb';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<UxSection className={mixinClassName}>
			<UxArticle>
				<UxContent>

				</UxContent>
			</UxArticle>
		</UxSection>
	)
};

export default UxBreadcrumb;