'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxToggle from "@/components/base/UxToggle";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxToggle</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxGroup Toggle Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>selected(String): 선택 값</li>
											<li>disabled(Boolean): 비활성화 여부</li>
											<li>[event]</li>
											<li>onChange(Func): 선택 변경 이벤트 콜백</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">UxToggle Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>value(String): 값</li>
											<li>selected(String): 선택 값</li>
											<li>disabled(Boolean): 비활성화 여부</li>
											<li>[event]</li>
											<li>onChange(Func): 선택 변경 이벤트 콜백</li>
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
									<UxGroup role="toggle">
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:selected</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="toggle"
										selected="0"
									>
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="toggle"
										selected="0"
										disabled
									>
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.col2</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="toggle"
										className="col2"
										selected="0"
									>
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
										<UxToggle value="2">Toggle 03</UxToggle>
										<UxToggle value="3">Toggle 04</UxToggle>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.split</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="toggle"
										className="split"
										selected="0"
									>
										<UxToggle value="0">Toggle 01</UxToggle>
										<UxToggle value="1">Toggle 02</UxToggle>
										<UxToggle value="2">Toggle 03</UxToggle>
										<UxToggle value="3">Toggle 04</UxToggle>
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