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
							<h4>:role date</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxPicker
										role="date"
										placeholder="날짜를 선택해주세요"
										label1="날짜"
										label2="를 선택해주세요"
										min="2010"
										max="2025"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="date"
										placeholder="날짜를 선택해주세요"
										label1="날짜"
										label2="를 선택해주세요"
										min="2010"
										max="2025"
										value="2025.08.15"
										year="2025"
										month="8"
										date="15"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxPicker
										role="date"
										placeholder="날짜를 선택해주세요"
										label1="날짜"
										label2="를 선택해주세요"
										min="2010"
										max="2025"
										value="2025.08.01"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxPicker
										role="date"
										placeholder="날짜를 선택해주세요"
										label1="날짜"
										label2="를 선택해주세요"
										min="2010"
										max="2025"
										value="2025.08.01"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="date"
										placeholder="날짜를 선택해주세요"
										label1="날짜"
										label2="를 선택해주세요"
										min="2010"
										max="2025"
										value="2025.08.01"
										readonly
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="date"
										placeholder="날짜를 선택해주세요"
										label1="날짜"
										label2="를 선택해주세요"
										min="2010"
										max="2025"
										value="2025.08.01"
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
							<h4>:opts</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxPicker
										role="date"
										placeholder="연도를 선택해주세요"
										label1="연도"
										label2="를 선택해주세요"
										opts={['year']}
										min="2010"
										max="2025"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="date"
										placeholder="연월을 선택해주세요"
										label1="연월"
										label2="을 선택해주세요"
										opts={['year', 'month']}
										min="2010"
										max="2025"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="date"
										placeholder="날짜를 선택해주세요"
										label1="날짜"
										label2="를 선택해주세요"
										opts={['year', 'month', 'date']}
										min="2010"
										max="2025"
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