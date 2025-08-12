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
import UxTextarea from "@/components/base/UxTextarea";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxTextarea</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTextarea - Default</h5>
								</UxSubject>
								<UxContent>
									<UxTextarea placeholder="내용을 입력해주세요." />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTextarea - Fluid</h5>
								</UxSubject>
								<UxContent>
									<UxTextarea
										placeholder="내용을 입력해주세요."
										rows="1"
										fluid
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTextarea - MaxLength</h5>
								</UxSubject>
								<UxContent>
									<UxTextarea
										placeholder="내용을 입력해주세요."
										maxLength={100}
										fluid
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTextarea - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxTextarea
										placeholder="내용을 입력해주세요."
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTextarea - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxTextarea
										placeholder="내용을 입력해주세요."
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTextarea - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxTextarea
										placeholder="내용을 입력해주세요."
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTextarea - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxTextarea
										placeholder="내용을 입력해주세요."
										disabled
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