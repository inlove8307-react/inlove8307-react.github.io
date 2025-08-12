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
import UxButton from "@/components/base/UxButton";
import UxDivider from "@/components/base/UxDivider";
import UxGrid from "@/components/base/UxGrid";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>Button</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Outline</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="outline h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Contain</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="contain h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Primary</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="primary h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Grid</h5>
								</UxSubject>
								<UxContent>
									<UxGrid className="gap8">
										<UxButton className="contain h3 grow small">
											<span className="text">cancel</span>
										</UxButton>
										<UxButton className="primary h3 grow full">
											<span className="text">submit</span>
										</UxButton>
									</UxGrid>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Select</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										select
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Search</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										search
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										valid={true}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										valid={false}
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										disabled
									>
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};