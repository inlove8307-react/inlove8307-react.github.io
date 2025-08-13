'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxDatePicker from "@/components/base/UxDatePicker";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxDatePicker</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse>
									<div data-role="summary">UxDatePicker Props</div>
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
									<UxDatePicker />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker value="2025.07.01" />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										value="2025.07.01"
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										value="2025.07.01"
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										value="2025.07.01"
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:from :to</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from
										to
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:from :to :value</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:From :to :valid true</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:From :to :valid false</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:From :to :disabled</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
										disabled
									/>
									<UxDatePicker
										from={{
											value: '2025.07.01',
											disabled: true
										}}
										to={{
											value: '2025.07.07',
										}}
									/>
									<UxDatePicker
										from={{
											value: '2025.07.01',
										}}
										to={{
											value: '2025.07.07',
											disabled: true
										}}
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