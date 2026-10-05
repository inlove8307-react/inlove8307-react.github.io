'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxCheckbox from "@/components/base/UxCheckbox";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCheckbox</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxCheckbox Props</div>
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
							<UxGroup className="col2">
								<UxCheckbox
									onChange={(value) => console.log(value)}
								>
									<span>미선택</span>
								</UxCheckbox>
								<UxCheckbox
									onChange={(value) => console.log(value)}
									checked
								>
									<span>선택</span>
								</UxCheckbox>
								<UxCheckbox
									onChange={(value) => console.log(value)}
									disabled
								>
									<span>비활성</span>
								</UxCheckbox>
								<UxCheckbox
									onChange={(value) => console.log(value)}
									checked disabled
								>
									<span>선택 비활성</span>
								</UxCheckbox>
							</UxGroup>
							<UxGroup className="col3">
								<UxCheckbox
									className="thin"
									onChange={(value) => console.log(value)}
								>
									<span>미선택</span>
								</UxCheckbox>
								<UxCheckbox
									className="thin"
									onChange={(value) => console.log(value)}
									checked
								>
									<span>선택</span>
								</UxCheckbox>
								<UxCheckbox
									className="thin"
									onChange={(value) => console.log(value)}
									disabled
								>
									<span>비활성</span>
								</UxCheckbox>
							</UxGroup>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role switch</h4>
						</UxSubject>
						<UxContent>
							<UxCheckbox
								role="switch"
								onChange={(value) => console.log(value)}
							/>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};