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
										<ul>
											<li>[props]</li>
											<li>placeholder(String): 값 없을 경우 표시 문구</li>
											<li>value(String): 값</li>
											<li>from(Object): 시작일</li>
											<li>to(Object): 종료일</li>
											<li>valid(Boolean): 유효성 여부</li>
											<li>readonly(Boolean): 읽기전용 여부</li>
											<li>disabled(Boolean): 비활성화 여부</li>
											<li>[event]</li>
											<li>onClick(Func): 클릭 이벤트 콜백</li>
											<li>onChange(Func): 값 변경 이벤트 콜백</li>
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