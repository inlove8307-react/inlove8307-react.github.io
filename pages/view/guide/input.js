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
import UxInput from "@/components/base/UxInput";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>Input</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Default</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="default"
										placeholder="placeholder"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="valid"
										placeholder="placeholder"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="invalid"
										placeholder="placeholder"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="readonly"
										placeholder="placeholder"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="disabled"
										placeholder="placeholder"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Prefix</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="value"
										placeholder="placeholder"
										clear
										prefix="prefix"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Suffix</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="value"
										placeholder="placeholder"
										clear
										suffix="suffix"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Timer</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="value"
										placeholder="placeholder"
										clear
										timer="03:00"
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