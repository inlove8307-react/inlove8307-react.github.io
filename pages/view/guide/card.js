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
import UxCard from "@/components/base/UxCard";
import UxCardGroup from "@/components/base/UxCardGroup";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCard</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - Default</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup>
										<UxCard>
											CARD 01
										</UxCard>
										<UxCard>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - col2</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup
										className="col2"
									>
										<UxCard>
											CARD 01
										</UxCard>
										<UxCard>
											CARD 02
										</UxCard>
										<UxCard>
											CARD 03
										</UxCard>
										<UxCard>
											CARD 04
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - Checkbox</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup
										type="checkbox"
									>
										<UxCard
											value="value01"
											checked={true}
										>
											CARD 01
										</UxCard>
										<UxCard
											value="value02"
										>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - Radio</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup
										type="radio"
										selected="value01"
									>
										<UxCard
											value="value01"
										>
											CARD 01
										</UxCard>
										<UxCard
											value="value02"
										>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};