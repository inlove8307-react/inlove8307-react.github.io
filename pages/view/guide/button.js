'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from "@/components/base/UxButton";
import UxDivider from "@/components/base/UxDivider";
import UxGroup from "@/components/base/UxGroup";
import UxCollapse from "@/components/base/UxCollapse";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxButton</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse>
									<div data-role="summary">UxButton Props</div>
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
							</UxGroup>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>.outline</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="outline h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.contain</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="contain h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.primary</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="primary h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>grid</h5>
								</UxSubject>
								<UxContent>
									<UxGroup className="gap8">
										<UxButton className="contain h3 small">
											<span className="text">cancel</span>
										</UxButton>
										<UxButton className="primary h3">
											<span className="text">submit</span>
										</UxButton>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:select</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										select
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:search</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										search
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										valid={true}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										valid={false}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										disabled
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};