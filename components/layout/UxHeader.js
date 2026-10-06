"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "motion/react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from '@/components/layout/UxSection';
import UxArticle from '@/components/layout/UxArticle';
import UxContent from '@/components/layout/UxContent';
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxButton from "@/components/base/UxButton";

const UxHeader = ({ ref, ...props }) => {
	const baseClassName = 'ux-header';
	const caseClassName = classnames(baseClassName, props.className);
	const router = useRouter();
	const [status, setStatus] = useState(false);
	const pages = [
		{ name: 'Button', path: '/button' },
		{ name: 'Checkbox', path: '/checkbox' },
		{ name: 'Radio', path: '/radio' },
		{ name: 'Input', path: '/input' },
		{ name: 'Password', path: '/password' },
		{ name: 'Phone', path: '/phone' },
		{ name: 'Resident', path: '/resident' },
		{ name: 'Business', path: '/business' },
		{ name: 'License', path: '/license' },
		{ name: 'DatePicker', path: '/datepicker' },
		{ name: 'DateRange', path: '/daterange' },
		{ name: 'Textarea', path: '/textarea' },
		{ name: 'File', path: '/file' },
		{ name: 'Search', path: '/search' },
		{ name: 'Select', path: '/select' },
		{ name: 'Dropdown', path: '/dropdown' },
		{ name: 'Bank', path: '/bank' },
		{ name: 'Picker', path: '/picker' },
		{ name: 'Date', path: '/date' },
		{ name: 'Time', path: '/time' },
		{ name: 'Tab', path: '/tab' },
		{ name: 'Collapse', path: '/collapse' },
		{ name: 'Card', path: '/card' },
		{ name: 'Progress', path: '/progress' },
		{ name: 'Slider', path: '/slider' },
		{ name: 'Pagination', path: '/pagination' },
		{ name: 'Calendar', path: '/calendar' },
		{ name: 'Sortlist', path: '/sortlist' },
		{ name: 'Popup', path: '/popup' },
		{ name: 'Icons', path: '/icons' },
	];

	return (
		<header className={caseClassName}>
			<UxSection className="base">
				<UxArticle>
					<UxContent className="row space">
						<UxGroup>
							<UxButton
								className="menu"
								onClick={() => setStatus(!status)}
							>
								<i className="icon mask menu" />
							</UxButton>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
			<AnimatePresence mode="sync">
				{
					status &&
					<motion.div
						className="motion"
						initial={{ transform: 'translateY(-100%)', opacity: .5 }}
						animate={{ transform: 'translateY(0)', opacity: 1 }}
						exit={{ transform: 'translateY(-100%)', opacity: .5 }}
						transition={{ duration: .15, ease: 'easeInOut' }}
					>
						<UxSection className="menu">
							<UxArticle>
								<UxContent>
									<UxGroup className="col6">
										{
											pages.map(({name, path}, index) => (
												<UxButton
													key={index}
													className={`${baseClassName}-link`}
													onClick={() => {
														setStatus(false);
														router.push(path);
													}}
												>
													<span>{name}</span>
												</UxButton>
											))
										}
									</UxGroup>
								</UxContent>
							</UxArticle>
						</UxSection>
					</motion.div>
				}
			</AnimatePresence>
		</header>
	)
};

export default UxHeader;