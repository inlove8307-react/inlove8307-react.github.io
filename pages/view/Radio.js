'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";
import UxForm from "@/components/base/UxForm";
import UxField from "@/components/base/UxField";
import UxRadio from "@/components/base/UxRadio";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxRadio</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxRadio Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>[event]</li>
										</ul>
									</div>
								</UxCollapse>
							</UxGroup>
						</UxSubject>
					</UxArticle> */}

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>default</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxGroup
										role="radio"
										className="col3"
										value="1"
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>미선택</span>
										</UxRadio>
										<UxRadio
											value="1"
										>
											<span>선택</span>
										</UxRadio>
										<UxRadio
											value="2"
											disabled
										>
											<span>비활성</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxGroup
										role="radio"
										className="col2"
										value="1"
										disabled
									>
										<UxRadio value="0">
											<span>비활성</span>
										</UxRadio>
										<UxRadio value="1">
											<span>선택 비활성</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>.chip</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxGroup
										role="radio"
										className="chip"
										value="0"
										scroll
										// expand
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>라벨1</span>
										</UxRadio>
										<UxRadio value="1">
											<span>라벨2</span>
										</UxRadio>
										<UxRadio value="2">
											<span>라벨3</span>
										</UxRadio>
										<UxRadio value="3">
											<span>라벨4</span>
										</UxRadio>
										<UxRadio value="4">
											<span>라벨5</span>
										</UxRadio>
										<UxRadio value="5">
											<span>라벨6</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>.block</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxGroup
										role="radio"
										className="block col2"
										value="0"
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>라벨1</span>
										</UxRadio>
										<UxRadio value="1">
											<span>라벨2</span>
										</UxRadio>
										<UxRadio value="2">
											<span>라벨3</span>
										</UxRadio>
										<UxRadio value="3">
											<span>라벨4</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>.block.split</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxGroup
										role="radio"
										className="block split col2"
										value="0"
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>라벨1</span>
										</UxRadio>
										<UxRadio value="1">
											<span>라벨2</span>
										</UxRadio>
										<UxRadio value="2">
											<span>라벨3</span>
										</UxRadio>
										<UxRadio value="3">
											<span>라벨4</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};