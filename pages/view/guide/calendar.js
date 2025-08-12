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
import UxCalendar from "@/components/base/UxCalendar";
import UxDateCalendar from "@/components/base/UxDateCalendar";
import UxMonthCalendar from "@/components/base/UxMonthCalendar";
import UxYearCalendar from "@/components/base/UxYearCalendar";
import UxDivider from "@/components/base/UxDivider";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCalendar</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxCalendar
										scrollIntoView
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar - DateCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxDateCalendar
										disables={['2025.07.01', '2025.07.02', '2025.07.03']}
										icons={[
											{ date: '2025.07.01', icons: ['i904'] },
											{ date: '2025.07.04', icons: ['i901'] },
											{ date: '2025.07.07', icons: ['i902', 'i903'] },
											{ date: '2025.07.16', icons: ['i905'] },
											{ date: '2025.07.25', icons: ['i906', 'i907'] },
											{ date: '2025.07.29', icons: ['i908', 'i909', 'i901'] },
											{ date: '2025.08.07', icons: ['i900'] },
										]}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar - MonthCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxMonthCalendar />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar - YearCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxYearCalendar />
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};