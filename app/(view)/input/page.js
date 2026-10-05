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
import UxInput from "@/components/base/UxInput";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxInput</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxInput Props</div>
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
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
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