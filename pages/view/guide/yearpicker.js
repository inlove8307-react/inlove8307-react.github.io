'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxYearPicker from "@/components/base/UxYearPicker";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxYearPicker</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxCollapseGroup className="sample">
								<UxCollapse>
									<div data-role="summary">UxYearPicker Props</div>
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
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxYearPicker />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxYearPicker
										value={2025}
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxYearPicker
										value={2025}
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxYearPicker
										value={2025}
										disabled
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