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
import UxBrn from "@/components/base/UxBrn";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>Brn(사업자등록번호)</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Default</h5>
								</UxSubject>
								<UxContent>
									<UxBrn clear />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										submit="submit"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										submit="submit"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										clear
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