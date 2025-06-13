import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxFooter = ({ ref, ...props }) => {
	const originClassName = 'ux-footer';
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<footer className={mixinClassName}>
			<UxSection>
				<UxArticle>
					<UxContent>

					</UxContent>
				</UxArticle>
			</UxSection>
		</footer>
	)
};

export default UxFooter;