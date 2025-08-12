'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxProgress from "@/components/base/UxProgress";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxProgress</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxCollapseGroup className="sample">
								<UxCollapse>
									<div data-role="summary">UxProgress Props</div>
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
									<UxProgress value={50} />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:suffix</h5>
								</UxSubject>
								<UxContent>
									<UxProgress
										value={50}
										suffix="원"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:step</h5>
								</UxSubject>
								<UxContent>
									<UxProgress
										min={0}
										max={100}
										value={50}
										step={[0, 25, 50, 75, 100]}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:from :to</h5>
								</UxSubject>
								<UxContent>
									<UxProgress
										value={50}
										from="2025.08.01"
										to="2025.08.30"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>flag</h5>
								</UxSubject>
								<UxContent>
									<UxProgress value={50}>
										<div data-role="flag">flag</div>
									</UxProgress>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>legend</h5>
								</UxSubject>
								<UxContent>
									<UxProgress value={50}>
										<div data-role="legend">legend</div>
									</UxProgress>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};