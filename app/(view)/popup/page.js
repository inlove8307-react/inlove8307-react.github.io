'use client';

import React from "react";
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxButton from "@/components/base/UxButton";
/* POPUP */
import Popup from "@/components/popup/PopupNew";

export default function Guide() {
	const modal = useModal();

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>useModal</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<h4>default</h4>
						</UxSubject>
						<UxContent>
							<UxGroup className="col2 gap16">
								<UxButton
									className="tertiary h3"
									onClick={() => {
										modal.alert('message');
									}}
								>
									<span>alert</span>
								</UxButton>
								<UxButton
									className="tertiary h3"
									onClick={() => {
										modal.confirm('message');
									}}
								>
									<span>confirm</span>
								</UxButton>
								<UxButton
									className="tertiary h3"
									onClick={() => {
										modal.center(Popup);
									}}
								>
									<span>center</span>
								</UxButton>
								<UxButton
									className="tertiary h3"
									onClick={() => {
										modal.bottom(Popup);
									}}
								>
									<span>bottom</span>
								</UxButton>
								<UxButton
									className="tertiary h3"
									onClick={() => {
										modal.full(Popup);
									}}
								>
									<span>full</span>
								</UxButton>
							</UxGroup>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>tooltip</h4>
						</UxSubject>
						<UxContent>
							<UxGroup className="auto">
								<UxButton role="tooltip">
									<ul>
										<li className="bl dot">list dot</li>
										<li className="bl dot">list dot</li>
										<li className="bl dot">list dot</li>
									</ul>
								</UxButton>
							</UxGroup>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};