'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxToggle from "@/components/base/UxToggle";
import UxToggleGroup from "@/components/base/UxToggleGroup";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxToggle</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup>
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:selected</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup selected="value01">
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.col2</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup
										className="col2"
									>
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
										<UxToggle
											value="value03"
										>
											Toggle 03
										</UxToggle>
										<UxToggle
											value="value04"
										>
											Toggle 04
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.col3</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup
										className="col3"
									>
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
										<UxToggle
											value="value03"
										>
											Toggle 03
										</UxToggle>
										<UxToggle
											value="value04"
										>
											Toggle 04
										</UxToggle>
										<UxToggle
											value="value05"
										>
											Toggle 05
										</UxToggle>
										<UxToggle
											value="value06"
										>
											Toggle 06
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};