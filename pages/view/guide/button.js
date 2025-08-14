'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from "@/components/base/UxButton";
import UxDivider from "@/components/base/UxDivider";
import UxGroup from "@/components/base/UxGroup";
import UxCollapse from "@/components/base/UxCollapse";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxButton</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse>
									<div data-role="summary">UxButton Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>title(String): 접근성 타이틀</li>
											<li>active(Boolean): 아이콘 유형</li>
											<li>placeholder(String): 표시 문구</li>
											<li>valid(Boolean): 유효성 여부</li>
											<li>readonly(Boolean): 읽기전용 여부</li>
											<li>disabled(Boolean): 비활성화 여부</li>
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
									<h5>.outline</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="outline h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.contain</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="contain h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.primary</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="primary h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										disabled
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>group</h5>
								</UxSubject>
								<UxContent>
									<UxGroup className="gap8">
										<UxButton className="contain h3 small">
											<span className="text">cancel</span>
										</UxButton>
										<UxButton className="primary h3">
											<span className="text">submit</span>
										</UxButton>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role select</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="select"
										placeholder="선택해주세요"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role select :active</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="select"
										placeholder="선택해주세요"
										active
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role select :valid true</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="select"
										placeholder="선택해주세요"
										valid={true}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role select :valid false</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="select"
										placeholder="선택해주세요"
										valid={false}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role select :readonly</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="select"
										placeholder="선택해주세요"
										readonly
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role select :disabled</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="select"
										placeholder="선택해주세요"
										disabled
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role search</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="search"
										placeholder="입력해주세요"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role search :valid true</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="search"
										placeholder="입력해주세요"
										valid={true}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role search :valid false</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="search"
										placeholder="입력해주세요"
										valid={false}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role search :readonly</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="search"
										placeholder="입력해주세요"
										readonly
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role search :disabled</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="search"
										placeholder="입력해주세요"
										disabled
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role input</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="input"
										className="right"
										placeholder="입력해주세요"
										prefix="금액"
										suffix="원"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role input :valid true</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="input"
										className="right"
										placeholder="입력해주세요"
										prefix="금액"
										suffix="원"
										valid={true}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role input :valid false</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="input"
										className="right"
										placeholder="입력해주세요"
										prefix="금액"
										suffix="원"
										valid={false}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role input :readonly</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="input"
										className="right"
										placeholder="입력해주세요"
										prefix="금액"
										suffix="원"
										readonly
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role input :disabled</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										role="input"
										className="right"
										placeholder="입력해주세요"
										prefix="금액"
										suffix="원"
										disabled
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};