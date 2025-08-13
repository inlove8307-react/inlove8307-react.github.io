'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxToggle from "@/components/base/UxToggle";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxToggle</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse>
									<div data-role="summary">UxGroup Toggle Props</div>
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
									<div data-role="summary">UxToggle Props</div>
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
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxGroup role="toggle">
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:selected</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="toggle"
										selected="0"
									>
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.col2</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="toggle"
										className="col2"
									>
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
										<UxToggle value="2">Toggle 03</UxToggle>
										<UxToggle value="3">Toggle 04</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.col3</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="toggle"
										className="col3"
									>
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
										<UxToggle value="2">Toggle 03</UxToggle>
										<UxToggle value="3">Toggle 04</UxToggle>
										<UxToggle value="4">Toggle 05</UxToggle>
										<UxToggle value="5">Toggle 06</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};