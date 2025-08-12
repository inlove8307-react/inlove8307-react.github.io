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
import UxFile from "@/components/base/UxFile";
import UxButton from "@/components/base/UxButton";
import UxIcon from "@/components/base/UxIcon";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>File</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxFile - Default</h5>
								</UxSubject>
								<UxContent>
									<UxFile
										placeholder="파일을 선택해주세요."
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxFile - Slot</h5>
								</UxSubject>
								<UxContent>
									<UxFile>
										<UxButton className="outline h3">
											<span className="text">파일첨부</span>
											<UxIcon className="i054" />
										</UxButton>
									</UxFile>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};