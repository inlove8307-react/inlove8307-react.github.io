"use client";

import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';

const UxFooter = ({ ref, ...props }) => {
	const baseClassName = 'ux-footer';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<footer className={caseClassName}>
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