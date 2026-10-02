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
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxSelect</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxSelect Props</div>
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
							<h4>:role bank</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
										readonly
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
										disabled
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