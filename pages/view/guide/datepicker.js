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
								<UxCollapse entire>
									<div data-role="summary">UxDatePicker Props</div>
									<div data-role="details">
										<ul>
											<li>[props]</li>
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
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										value="2025.07.01"
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
									<UxDatePicker
										value="2025.07.01"
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
										<UxDatePicker />
										<UxDatePicker className="dash" />
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
										<UxDatePicker value="2025.08.01" />
										<UxDatePicker
											className="dash"
											value="2025.08.31"
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
										<UxDatePicker value="2025.08.01" />
										<UxDatePicker
											className="dash"
											value="2025.08.31"
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
										<UxDatePicker value="2025.08.01" />
										<UxDatePicker
											className="dash"
											value="2025.08.31"
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
										<UxDatePicker value="2025.08.01" />
										<UxDatePicker
											className="dash"
											value="2025.08.31"
										/>
									</UxGroup>
									<UxGroup
										role="input"
										className="col2"
									>
										<UxDatePicker
											value="2025.08.01"
											readonly
										/>
										<UxDatePicker
											className="dash"
											value="2025.08.31"
										/>
									</UxGroup>
									<UxGroup
										role="input"
										className="col2"
									>
										<UxDatePicker value="2025.08.01" />
										<UxDatePicker
											className="dash"
											value="2025.08.31"
											readonly
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
										<UxDatePicker value="2025.08.01" />
										<UxDatePicker
											className="dash"
											value="2025.08.31"
										/>
									</UxGroup>
									<UxGroup
										role="input"
										className="col2"
									>
										<UxDatePicker
											value="2025.08.01"
											disabled
										/>
										<UxDatePicker
											className="dash"
											value="2025.08.31"
										/>
									</UxGroup>
									<UxGroup
										role="input"
										className="col2"
									>
										<UxDatePicker value="2025.08.01" />
										<UxDatePicker
											className="dash"
											value="2025.08.31"
											disabled
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