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
							<h4>:role resident</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
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
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
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

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:gender</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
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
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
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