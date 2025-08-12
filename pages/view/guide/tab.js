'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxTab from "@/components/base/UxTab";
import UxPanel from "@/components/base/UxPanel";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxTab</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxTab>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:linear</h5>
								</UxSubject>
								<UxContent>
									<UxTab linear>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:scroll</h5>
								</UxSubject>
								<UxContent>
									<UxTab
										linear
										scroll
									>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary03
											</div>
											<div data-role="details">
												details03
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary04
											</div>
											<div data-role="details">
												details04
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary05
											</div>
											<div data-role="details">
												details05
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.full</h5>
								</UxSubject>
								<UxContent>
									<UxTab
										className="full"
										linear
									>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.block</h5>
								</UxSubject>
								<UxContent>
									<UxTab
										className="full block"
										linear
									>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};