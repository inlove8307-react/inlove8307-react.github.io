'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxCard from "@/components/base/UxCard";
import UxCardGroup from "@/components/base/UxCardGroup";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCard</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxCollapseGroup className="sample">
								<UxCollapse>
									<div data-role="summary">UxCardGroup Props</div>
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
									<div data-role="summary">UxCard Props</div>
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
									<UxCardGroup>
										<UxCard>
											CARD 01
										</UxCard>
										<UxCard>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.col2</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup className="col2">
										<UxCard>
											CARD 01
										</UxCard>
										<UxCard>
											CARD 02
										</UxCard>
										<UxCard>
											CARD 03
										</UxCard>
										<UxCard>
											CARD 04
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:type checkbox</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup type="checkbox">
										<UxCard
											value="value01"
											checked={true}
										>
											CARD 01
										</UxCard>
										<UxCard
											value="value02"
										>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:type radio</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup
										type="radio"
										selected="value01"
									>
										<UxCard
											value="value01"
										>
											CARD 01
										</UxCard>
										<UxCard
											value="value02"
										>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};