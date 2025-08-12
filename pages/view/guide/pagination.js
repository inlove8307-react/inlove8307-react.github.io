'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxPagination from "@/components/base/UxPagination";
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxPagination</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxCollapseGroup className="sample">
								<UxCollapse>
									<div data-role="summary">UxPagination Props</div>
									<div data-role="details">
										<p>[props]</p>
										<ul>
											<li></li>
										</ul>
										<p>[event]</p>
										<ul>
											<li></li>
										</ul>
									</div>
								</UxCollapse>
							</UxCollapseGroup>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>:default</h5>
								</UxSubject>
								<UxContent>
									<UxPagination
										page={1}
										unit={5}
										total={35}
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};