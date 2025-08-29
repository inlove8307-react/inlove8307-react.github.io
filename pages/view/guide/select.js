'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";
import UxInput from "@/components/base/UxInput";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxSelect</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxSelect Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>placeholder(String): 값 없을 경우 표시 문구</li>
											<li>value(String): 값</li>
											<li>valid(Boolean): 유효성 여부</li>
											<li>readonly(Boolean): 읽기전용 여부</li>
											<li>disabled(Boolean): 비활성화 여부</li>
											<li>[event]</li>
											<li>onClick(Func): 클릭 이벤트 콜백</li>
											<li>onChange(Func): 값 변경 이벤트 콜백</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div data-role="summary">UxOption Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>value(String): 값</li>
											<li>selected(Boolean): 선택 여부</li>
											<li>[event]</li>
											<li>onClick(Func): 클릭 이벤트 콜백</li>
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
									<UxSelect placeholder="선택해주세요">
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										valid={true}
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										valid={false}
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										readonly
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										disabled
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>group</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="input"
									>
										<UxSelect
											style={{ width: '6rem' }}
											placeholder="국번"
										>
											<UxOption value="0">010</UxOption>
											<UxOption value="1">011</UxOption>
										</UxSelect>
										<UxInput
											className="last"
											placeholder="입력해주세요"
										/>
									</UxGroup>
									<UxGroup
										role="input"
										className="col2"
									>
										<UxInput
											placeholder="이메일"
											suffix="@"
										/>
										<UxSelect placeholder="도메인">
											<UxOption value="0">gmail.com</UxOption>
											<UxOption value="1">naver.com</UxOption>
										</UxSelect>
									</UxGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};