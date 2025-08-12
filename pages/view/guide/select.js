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
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>Select</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSelect - Default</h5>
								</UxSubject>
								<UxContent>
									<UxSelect placeholder="선택해주세요">
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSelect - Value</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSelect - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										valid={true}
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSelect - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										valid={false}
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSelect - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxSelect
										placeholder="선택해주세요"
										value="0"
										disabled
									>
										<UxOption value="0">OPTION01</UxOption>
										<UxOption value="1">OPTION02</UxOption>
										<UxOption value="2">OPTION03</UxOption>
									</UxSelect>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};