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
import UxPicker from "@/components/base/UxPicker";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxPicker</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxPicker Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
											<li>className(String): 추가 클래스</li>
											<li>role(String): 유형('date', 'time')</li>
											<li>opts(Array): date일 경우(['year', 'month', 'date']), time일 경우(['half', 'hour', 'minute', 'second'])</li>
											<li>min(String): 선택 항목 최소값(data 있을 경우 사용 불가)</li>
											<li>max(String): 선택 항목 최대값(data 있을 경우 사용 불가)</li>
											<li>data(Array): 선택 항목 배열(min, max 있을 경우 사용 불가)</li>
											<li>suffix(String): 선택 항목 뒤 문구</li>
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
							</UxGroup>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxPicker />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:data</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										data={['2000', '2005', '2010', '2015', '2020', '2025']}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:min :max</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										min="2010"
										max="2025"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										min="2010"
										max="2025"
										value="2025"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:suffix</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										min="2010"
										max="2025"
										value="2025"
										suffix="년"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										min="2010"
										max="2025"
										value="2025"
										suffix="년"
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
									<UxPicker
										min="2010"
										max="2025"
										value="2025"
										suffix="년"
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										min="2010"
										max="2025"
										value="2025"
										suffix="년"
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										min="2010"
										max="2025"
										value="2025"
										suffix="년"
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role date</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="date"
										min="2010"
										max="2025"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:opts</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="date"
										opts={['year']}
										min="2010"
										max="2025"
									/>
									<UxPicker
										role="date"
										opts={['year', 'month']}
										min="2010"
										max="2025"
									/>
									<UxPicker
										role="date"
										opts={['year', 'month', 'date']}
										min="2010"
										max="2025"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="date"
										min="2010"
										max="2025"
										value="2025.08.15"
										year="2025"
										month="8"
										date="15"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="date"
										min="2010"
										max="2025"
										value="2025.08.01"
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
									<UxPicker
										role="date"
										min="2010"
										max="2025"
										value="2025.08.01"
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="date"
										min="2010"
										max="2025"
										value="2025.08.01"
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="date"
										min="2010"
										max="2025"
										value="2025.08.01"
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role time</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="time"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:opts</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="time"
										opts={['hour']}
									/>
									<UxPicker
										role="time"
										opts={['hour', 'minute']}
									/>
									<UxPicker
										role="time"
										opts={['hour', 'minute', 'second']}
									/>
									<UxPicker
										role="time"
										opts={['half', 'hour', 'minute', 'second']}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="time"
										value="12:34:56"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="time"
										value="12:34:56"
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
									<UxPicker
										role="time"
										value="12:34:56"
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="time"
										value="12:34:56"
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxPicker
										role="time"
										value="12:34:56"
										disabled
									/>
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
										className="col2"
									>
										<UxPicker
											role="date"
											min="2010"
											max="2025"
										/>
										<UxPicker
											role="time"
										/>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="input"
										className="col2"
									>
										<UxPicker
											role="date"
											min="2010"
											max="2025"
											value="2025.08.01"
										/>
										<UxPicker
											role="time"
											value="00.00.00"
										/>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="input"
										className="col2"
										valid={true}
									>
										<UxPicker
											role="date"
											min="2010"
											max="2025"
											value="2025.08.01"
										/>
										<UxPicker
											role="time"
											value="00.00.00"
										/>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="input"
										className="col2"
										valid={false}
									>
										<UxPicker
											role="date"
											min="2010"
											max="2025"
											value="2025.08.01"
										/>
										<UxPicker
											role="time"
											value="00.00.00"
										/>
									</UxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxGroup
										role="input"
										className="col2"
										readonly
									>
										<UxPicker
											role="date"
											min="2010"
											max="2025"
											value="2025.08.01"
										/>
										<UxPicker
											role="time"
											value="00.00.00"
										/>
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
										role="input"
										className="col2"
										disabled
									>
										<UxPicker
											role="date"
											min="2010"
											max="2025"
											value="2025.08.01"
										/>
										<UxPicker
											role="time"
											value="00.00.00"
										/>
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