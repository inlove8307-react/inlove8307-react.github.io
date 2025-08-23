'use client';

import React from "react";
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from "@/components/base/UxButton";
import UxPopover from "@/components/base/UxPopover";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";
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
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxModal Props</div>
									<div data-role="details">
										<p>[props]</p>
										<ul>
											<li></li>
										</ul>
										<p>[event]</p>
										<ul>
											<li></li>
										</ul>
									</div>
								</UxCollapse>
							</UxGroup>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>center</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										onClick={() => {
											modal.center(popup);
										}}
									>
										<span className="text">center</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>bottom</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										onClick={() => {
											modal.bottom(popup);
										}}
									>
										<span className="text">bottom</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>full</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										onClick={() => {
											modal.full(popup);
										}}
									>
										<span className="text">full</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>alert</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										onClick={() => {
											modal.alert('message');
										}}
									>
										<span className="text">alert</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>confirm</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										onClick={() => {
											modal.confirm('message');
										}}
									>
										<span className="text">confirm</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>toast</h5>
								</UxSubject>
								<UxContent>
									<UxButton
										className="outline h3"
										onClick={() => {
											modal.toast('message', { delay: 3000 });
										}}
									>
										<span className="text">toast</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>popover</h5>
								</UxSubject>
								<UxContent>
									<UxPopover>
										<p>POPOVER CONTENT</p>
									</UxPopover>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};