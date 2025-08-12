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
import UxLrn from "@/components/base/UxLrn";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxLrn(운전면허번호)</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Default</h5>
								</UxSubject>
								<UxContent>
									<UxLrn clear />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="submit"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="submit"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
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