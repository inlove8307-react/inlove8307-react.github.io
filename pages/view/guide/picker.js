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
import UxPicker from "@/components/base/UxPicker";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxPicker</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse>
									<div data-role="summary">UxPicker Props</div>
									<div data-role="details">
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
									<UxPicker
										min="0"
										max="10"
										onChange={(value) => console.log(value)}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role date</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="date"
										min="2010"
										max="2025"
										onChange={(value) => console.log(value)}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role time</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="time"
										onChange={(value) => console.log(value)}
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};