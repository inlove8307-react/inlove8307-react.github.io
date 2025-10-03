'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCard</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxGroup Card Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>type(String): 유형('radio', 'checkbox')</li>
											<li>selected(String): 선택 값</li>
											<li>[event]</li>
											<li>onChange(Func): 선택 변경 이벤트 콜백</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div data-role="summary">UxCard Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>type(String): 유형 ('checkbox', 'radio')</li>
											<li>checked(Boolean): 체크 여부</li>
											<li>selected(String): 선택 값</li>
											<li>disabled(Boolean): 비활성화 여부</li>
											<li>[event]</li>
											<li>onClick(Func): 클릭 이벤트 콜백</li>
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
									<UxGroup role="card">
										<UxCard>CARD 01</UxCard>
										<UxCard>CARD 02</UxCard>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:type checkbox</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="card"
										type="checkbox"
									>
										<UxCard
											value="0"
											checked={true}
										>
											CARD 01
										</UxCard>
										<UxCard value="1">CARD 02</UxCard>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:type radio</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="card"
										type="radio"
										selected="0"
									>
										<UxCard value="0">CARD 01</UxCard>
										<UxCard value="1">CARD 02</UxCard>
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