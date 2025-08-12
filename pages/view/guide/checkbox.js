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
import UxCheckbox from "@/components/base/UxCheckbox";
import UxCheckboxGroup from "@/components/base/UxCheckboxGroup";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCheckbox</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCheckbox - Default</h5>
								</UxSubject>
								<UxContent>
									<UxCheckboxGroup>
										<UxCheckbox
											checked={true}
										>
											CHECKBOX_01
										</UxCheckbox>
										<UxCheckbox
											checked={false}
										>
											CHECKBOX_02
										</UxCheckbox>
									</UxCheckboxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCheckbox - Column</h5>
								</UxSubject>
								<UxContent>
									<UxCheckboxGroup className="column">
										<UxCheckbox
											checked={true}
										>
											CHECKBOX_01
										</UxCheckbox>
										<UxCheckbox
											checked={false}
										>
											CHECKBOX_02
										</UxCheckbox>
									</UxCheckboxGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};