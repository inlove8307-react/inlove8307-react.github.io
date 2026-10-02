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
							<h4>:role dropdown</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxSelect
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxSelect
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxSelect
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										readonly
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										disabled
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
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