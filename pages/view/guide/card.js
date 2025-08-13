'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";

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
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse>
									<div data-role="summary">UxGroup Card Props</div>
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
							</UxGroup>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxGroup role="card">
										<UxCard>CARD 01</UxCard>
										<UxCard>CARD 02</UxCard>
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
										role="card"
										className="col2"
									>
										<UxCard>CARD 01</UxCard>
										<UxCard>CARD 02</UxCard>
										<UxCard>CARD 03</UxCard>
										<UxCard>CARD 04</UxCard>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:type checkbox</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="card"
										type="checkbox"
									>
										<UxCard
											value="0"
											checked={true}
										>
											CARD 01
										</UxCard>
										<UxCard value="1">CARD 02</UxCard>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:type radio</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="card"
										type="radio"
										selected="0"
									>
										<UxCard value="0">CARD 01</UxCard>
										<UxCard value="1">CARD 02</UxCard>
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