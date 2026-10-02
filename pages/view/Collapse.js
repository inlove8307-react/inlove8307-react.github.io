'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCollapse from "@/components/base/UxCollapse";
import UxDivider from "@/components/base/UxDivider";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCollapse</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxGroup Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>[event]</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">UxCollapse Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>[event]</li>
										</ul>
									</div>
								</UxCollapse>
							</UxGroup>
						</UxSubject>
					</UxArticle> */}

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>default</h4>
						</UxSubject>
						<UxContent>
							<UxCollapse>
								<div slot="summary">summary</div>
								<div slot="details">details</div>
							</UxCollapse>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:entire</h4>
						</UxSubject>
						<UxContent>
							<UxCollapse entire>
								<div slot="summary">summary</div>
								<div slot="details">details</div>
							</UxCollapse>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:expanded</h4>
						</UxSubject>
						<UxContent>
							<UxCollapse
								entire
								expanded
							>
								<div slot="summary">summary</div>
								<div slot="details">details</div>
							</UxCollapse>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>group</h4>
						</UxSubject>
						<UxContent>
							<UxGroup role="collapse">
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
							</UxGroup>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:selected</h4>
						</UxSubject>
						<UxContent>
							<UxGroup
								role="collapse"
								selected={0}
							>
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
							</UxGroup>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:once</h4>
						</UxSubject>
						<UxContent>
							<UxGroup
								role="collapse"
								once
							>
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
							</UxGroup>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};