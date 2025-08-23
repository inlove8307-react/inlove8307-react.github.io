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
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCollapse</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxGroup Collapse Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>selected(String): 선택 값</li>
											<li>once(Boolean): 단일 확장 여부</li>
											<li>[event]</li>
											<li>onChange(Func): 선택 변경 이벤트 콜백</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div data-role="summary">UxCollapse Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>index(Number): 그룹일 경우 식별값</li>
											<li>entire(Boolean): summary 전체 클릭 이벤트 여부</li>
											<li>expanded(Boolean): 확장 여부</li>
											<li>[event]</li>
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
									<UxCollapse entire>
										<div data-role="summary">summary</div>
										<div data-role="details">details</div>
									</UxCollapse>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:entire</h5>
								</UxSubject>
								<UxContent>
									<UxCollapse entire>
										<div data-role="summary">summary</div>
										<div data-role="details">details</div>
									</UxCollapse>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:expanded</h5>
								</UxSubject>
								<UxContent>
									<UxCollapse expanded>
										<div data-role="summary">summary</div>
										<div data-role="details">details</div>
									</UxCollapse>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>group</h5>
								</UxSubject>
								<UxContent>
									<UxGroup role="collapse">
										<UxCollapse entire>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse entire>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>group :selected</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="collapse"
										selected={0}
									>
										<UxCollapse entire>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse entire>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>group :once</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="collapse"
										once
									>
										<UxCollapse entire>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse entire>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
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