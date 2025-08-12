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
import UxSortList from "@/components/base/UxSortList";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxSortList</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSortList - Default</h5>
								</UxSubject>
								<UxContent>
									<UxSortList
										items={[
											{ id: '1', name: 'youtube', info: 'youtub.com' },
											{ id: '2', name: 'netflix', info: 'netflix.com' },
											{ id: '3', name: 'coupangplay', info: 'coupangplay.com' },
											{ id: '4', name: 'tving', info: 'tving.com' },
											{ id: '5', name: 'soop', info: 'sooplive.co.kr' },
										]}
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