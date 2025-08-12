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
import UxGrid from "@/components/base/UxGrid";
import UxPopover from "@/components/base/UxPopover";
import UxButton from "@/components/base/UxButton";
import UxDivider from "@/components/base/UxDivider";
/* POPUP */
import popup from "@/components/popup/popup.js";

export default function Sample() {
	const modal = useModal();

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxModal</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxModal</h5>
								</UxSubject>
								<UxContent>
									<UxGrid className="gap8 col3">
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.center(popup);
											}}
										>
											<span className="text">center</span>
										</UxButton>
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.bottom(popup);
											}}
										>
											<span className="text">bottom</span>
										</UxButton>
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.full(popup);
											}}
										>
											<span className="text">full</span>
										</UxButton>
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.alert('message');
											}}
										>
											<span className="text">alert</span>
										</UxButton>
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.confirm('message');
											}}
										>
											<span className="text">confirm</span>
										</UxButton>
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.toast('message', { delay: 3000 });
											}}
										>
											<span className="text">toast</span>
										</UxButton>
										<UxPopover>
											<p>POPOVER CONTENT</p>
										</UxPopover>
									</UxGrid>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};