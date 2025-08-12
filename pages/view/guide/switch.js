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
import UxSwitch from "@/components/base/UxSwitch";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxSwitch</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSwitch - Default</h5>
								</UxSubject>
								<UxContent>
									<UxSwitch />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSwitch - Checked</h5>
								</UxSubject>
								<UxContent>
									<UxSwitch checked />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSwitch - Label Left</h5>
								</UxSubject>
								<UxContent>
									<UxSwitch>
										<span data-role="left">label</span>
									</UxSwitch>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSwitch - Label Right</h5>
								</UxSubject>
								<UxContent>
									<UxSwitch>
										<span data-role="right">label</span>
									</UxSwitch>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};