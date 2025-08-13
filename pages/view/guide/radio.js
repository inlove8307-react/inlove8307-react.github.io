'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxRadio from "@/components/base/UxRadio";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxRadio</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse>
									<div data-role="summary">UxGroup Radio Props</div>
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
									<div data-role="summary">UxRadio Props</div>
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
									<UxGroup
										role="radio"
										selected="0"
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.column</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="radio"
										className="column"
										selected="0"
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.chip</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="radio"
										className="chip"
										selected="0"
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
										<UxRadio value="2">RADIO_03</UxRadio>
										<UxRadio value="3">RADIO_04</UxRadio>
										<UxRadio value="4">RADIO_05</UxRadio>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:scroll</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="radio"
										className="chip"
										selected="0"
										scroll
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
										<UxRadio value="2">RADIO_03</UxRadio>
										<UxRadio value="3">RADIO_04</UxRadio>
										<UxRadio value="4">RADIO_05</UxRadio>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:expand</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="radio"
										className="chip"
										selected="0"
										scroll
										expand
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
										<UxRadio value="2">RADIO_03</UxRadio>
										<UxRadio value="3">RADIO_04</UxRadio>
										<UxRadio value="4">RADIO_05</UxRadio>
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