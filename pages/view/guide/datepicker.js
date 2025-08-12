'use client';

import React, { useEffect, useState } from "react";
import useModal from "@/hook/useModal";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxDatePicker from "@/components/base/UxDatePicker";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>DatePicker</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - Default</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - Value</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker value="2025.07.01" />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - Valid</h5>
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
									<h5>UxDatePicker - Invalid</h5>
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
									<h5>UxDatePicker - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										value="2025.07.01"
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - From To</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from
										to
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - From To Value</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - From To Valid</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - From To Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxDatePicker - From To Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxDatePicker
										from={{
											value: '2025.07.01'
										}}
										to={{
											value: '2025.07.07'
										}}
										disabled
									/>
									<UxDatePicker
										from={{
											value: '2025.07.01',
											disabled: true
										}}
										to={{
											value: '2025.07.07',
										}}
									/>
									<UxDatePicker
										from={{
											value: '2025.07.01',
										}}
										to={{
											value: '2025.07.07',
											disabled: true
										}}
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};