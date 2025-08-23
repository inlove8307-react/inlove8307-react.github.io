'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxTab from "@/components/base/UxTab";
import UxPanel from "@/components/base/UxPanel";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxTab</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxTab Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>selected(Number): 선택 값</li>
											<li>linear(Boolean): 선택 변경 시 라인 효과 여부</li>
											<li>scroll(Boolean): 스크롤 여부</li>
											<li>[event]</li>
											<li>onChange(Func): 선택 변경 이벤트 콜백</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div data-role="summary">UxPanel Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>active(Boolean): 활성화 여부</li>
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
									<UxTab>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:linear</h5>
								</UxSubject>
								<UxContent>
									<UxTab linear>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:scroll</h5>
								</UxSubject>
								<UxContent>
									<UxTab
										linear
										scroll
									>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary03
											</div>
											<div data-role="details">
												details03
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary04
											</div>
											<div data-role="details">
												details04
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary05
											</div>
											<div data-role="details">
												details05
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.full</h5>
								</UxSubject>
								<UxContent>
									<UxTab
										className="full"
										linear
									>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.block</h5>
								</UxSubject>
								<UxContent>
									<UxTab
										className="full block"
										linear
									>
										<UxPanel>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxPanel>
										<UxPanel>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxPanel>
									</UxTab>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};