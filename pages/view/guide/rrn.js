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
import UxRrn from "@/components/base/UxRrn";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>Rrn(주민등록번호)</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Default</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										clear
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										valid={true}
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										valid={false}
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										readonly
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										disabled
										submit="submit"
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