'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxSelect</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxCollapseGroup className="sample">
								<UxCollapse>
									<div data-role="summary">UxSelect Props</div>
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
									<div data-role="summary">UxOption Props</div>
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
									<UxSelect placeholder="선택해주세요">
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										valid={true}
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										valid={false}
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										disabled
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};