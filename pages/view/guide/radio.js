'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxRadio from "@/components/base/UxRadio";
import UxRadioGroup from "@/components/base/UxRadioGroup";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxRadio</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxRadioGroup selected="0">
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
									</UxRadioGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.column</h5>
								</UxSubject>
								<UxContent>
									<UxRadioGroup
										className="column"
										selected="0"
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
									</UxRadioGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>.chip</h5>
								</UxSubject>
								<UxContent>
									<UxRadioGroup
										className="chip"
										selected="0"
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
										<UxRadio value="2">RADIO_03</UxRadio>
										<UxRadio value="3">RADIO_04</UxRadio>
										<UxRadio value="4">RADIO_05</UxRadio>
									</UxRadioGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:scroll</h5>
								</UxSubject>
								<UxContent>
									<UxRadioGroup
										className="chip"
										selected="0"
										scroll
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
										<UxRadio value="2">RADIO_03</UxRadio>
										<UxRadio value="3">RADIO_04</UxRadio>
										<UxRadio value="4">RADIO_05</UxRadio>
									</UxRadioGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:expand</h5>
								</UxSubject>
								<UxContent>
									<UxRadioGroup
										className="chip"
										selected="0"
										scroll
										expand
									>
										<UxRadio value="0">RADIO_01</UxRadio>
										<UxRadio value="1">RADIO_02</UxRadio>
										<UxRadio value="2">RADIO_03</UxRadio>
										<UxRadio value="3">RADIO_04</UxRadio>
										<UxRadio value="4">RADIO_05</UxRadio>
									</UxRadioGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};