"use client";

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";

const Page = ({ ref, ...props }) => {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>GUIDE</h3>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						{/* CONTENTS */}
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};

export default Page;