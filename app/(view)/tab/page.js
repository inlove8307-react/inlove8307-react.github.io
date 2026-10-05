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
import UxTab from "@/components/base/UxTab";
import UxPanel from "@/components/base/UxPanel";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxTab</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxTab Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>[event]</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">UxPanel Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
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
							<UxTab className="scroll">
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary4</div>
									<div slot="details">details4</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary5</div>
									<div slot="details">details5</div>
								</UxPanel>
							</UxTab>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>.linear</h4>
						</UxSubject>
						<UxContent>
							<UxTab className="linear scroll">
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary4</div>
									<div slot="details">details4</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary5</div>
									<div slot="details">details5</div>
								</UxPanel>
							</UxTab>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>.chip</h4>
						</UxSubject>
						<UxContent>
							<UxTab className="chip subtle scroll">
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary4</div>
									<div slot="details">details4</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary5</div>
									<div slot="details">details5</div>
								</UxPanel>
							</UxTab>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>.block</h4>
						</UxSubject>
						<UxContent>
							<UxTab className="block">
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
							</UxTab>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>.synced</h4>
						</UxSubject>
						<UxContent>
							<UxTab
								className="synced"
								rootMargin="96"
							>
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary4</div>
									<div slot="details">details4</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary5</div>
									<div slot="details">details5</div>
								</UxPanel>
							</UxTab>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};