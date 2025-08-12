'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCollapse</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxCollapseGroup className="sample">
								<UxCollapse>
									<div data-role="summary">UxCollapseGroup Props</div>
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
								<UxCollapse>
									<div data-role="summary">UxCollapse Props</div>
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
									<UxCollapse>
										<div data-role="summary">summary</div>
										<div data-role="details">details</div>
									</UxCollapse>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:expanded</h5>
								</UxSubject>
								<UxContent>
									<UxCollapse expanded>
										<div data-role="summary">summary</div>
										<div data-role="details">details</div>
									</UxCollapse>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>group</h5>
								</UxSubject>
								<UxContent>
									<UxCollapseGroup>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxCollapseGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:selected</h5>
								</UxSubject>
								<UxContent>
									<UxCollapseGroup selected={0}>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxCollapseGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:once</h5>
								</UxSubject>
								<UxContent>
									<UxCollapseGroup once>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxCollapseGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};