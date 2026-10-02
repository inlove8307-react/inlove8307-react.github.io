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
import UxForm from "@/components/base/UxForm";
import UxField from "@/components/base/UxField";
import UxPicker from "@/components/base/UxPicker";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxPicker</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxPicker Props</div>
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
							<UxForm>
								<UxField>
									<UxPicker
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										suffix="년"
										min="2010"
										max="2026"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										suffix="년"
										min="2010"
										max="2026"
										value="2025"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxPicker
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										suffix="년"
										min="2010"
										max="2025"
										value="2025"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxPicker
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										suffix="년"
										min="2010"
										max="2025"
										value="2025"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										suffix="년"
										min="2010"
										max="2025"
										value="2025"
										readonly
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										suffix="년"
										min="2010"
										max="2025"
										value="2025"
										disabled
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:data</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxPicker
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										suffix="년"
										data={['2000', '2005', '2010', '2015', '2020', '2025']}
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};