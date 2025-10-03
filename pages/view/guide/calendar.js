'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxDivider from "@/components/base/UxGroup";
import UxCalendar from "@/components/base/UxCalendar";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCalendar</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxCalendar Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>role(String): 유형 ('date', 'month', 'year')</li>
											<li>format(String): 날짜 형식</li>
											<li>date(String): 날짜</li>
											<li>year(Number): 연도</li>
											<li>scrollIntoView(Boolean): 자동 스크롤 여부</li>
											<li>disables(Array): 비활성화 날짜 배열</li>
											<li>icons(Object): 아이콘 추가 배열</li>
											<li>[event]</li>
											<li>onChange(Func): 값 변경 이벤트 콜백</li>
											<li>onDateChange(Func): 날짜 변경 이벤트 콜백</li>
											<li>onMonthChange(Func): 월 변경 이벤트 콜백</li>
											<li>onYearChange(Func): 연도 변경 이벤트 콜백</li>
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
									<UxCalendar scrollIntoView />
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role date</h5>
								</UxSubject>
								<UxContent>
									<UxCalendar role="date" />
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role month</h5>
								</UxSubject>
								<UxContent>
									<UxCalendar role="month" />
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role year</h5>
								</UxSubject>
								<UxContent>
									<UxCalendar role="year" />
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};