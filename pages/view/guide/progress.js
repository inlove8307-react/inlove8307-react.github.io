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
import UxProgress from "@/components/base/UxProgress";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxProgress</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxProgress - Default</h5>
								</UxSubject>
								<UxContent>
									<UxProgress value={50} />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxProgress - Suffix</h5>
								</UxSubject>
								<UxContent>
									<UxProgress
										value={50}
										suffix="원"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxProgress - Step</h5>
								</UxSubject>
								<UxContent>
									<UxProgress
										min={0}
										max={100}
										value={50}
										step={[0, 25, 50, 75, 100]}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxProgress - From, To</h5>
								</UxSubject>
								<UxContent>
									<UxProgress
										value={50}
										from="2025.08.01"
										to="2025.08.30"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxProgress - Flag</h5>
								</UxSubject>
								<UxContent>
									<UxProgress value={50}>
										<div data-role="flag">flag</div>
									</UxProgress>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxProgress - Legend</h5>
								</UxSubject>
								<UxContent>
									<UxProgress value={50}>
										<div data-role="legend">legend</div>
									</UxProgress>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};