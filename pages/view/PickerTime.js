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
							<h4>:role time</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										value="12:34:56"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										value="12:34:56"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										value="12:34:56"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										value="12:34:56"
										readonly
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										value="12:34:56"
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
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										opts={['hour']}
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										opts={['hour', 'minute']}
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										opts={['hour', 'minute', 'second']}
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxPicker
										role="time"
										placeholder="시간을 선택해주세요"
										label1="시간"
										label2="을 선택해주세요"
										opts={['half', 'hour', 'minute', 'second']}
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