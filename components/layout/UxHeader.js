"use client";

import React, { useState } from "react";
import { useRouter } from 'next/router';
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
		{ name: 'Button', path: '/view/Button' },
		{ name: 'Calendar', path: '/view/Calendar' },
		{ name: 'Card', path: '/view/Card' },
		{ name: 'Checkbox', path: '/view/Checkbox' },
		{ name: 'Collapse', path: '/view/Collapse' },
		{ name: 'Input', path: '/view/Input' },
		{ name: 'Business', path: '/view/InputBusiness' },
		{ name: 'DatePicker', path: '/view/InputDatepicker' },
		{ name: 'DateRange', path: '/view/InputDaterange' },
		{ name: 'File', path: '/view/InputFile' },
		{ name: 'License', path: '/view/InputLicense' },
		{ name: 'Password', path: '/view/InputPassword' },
		{ name: 'Phone', path: '/view/InputPhone' },
		{ name: 'Resident', path: '/view/InputResident' },
		{ name: 'Search', path: '/view/InputSearch' },
		{ name: 'Textarea', path: '/view/InputTextarea' },
		{ name: 'Pagination', path: '/view/Pagination' },
		{ name: 'Picker', path: '/view/Picker' },
		{ name: 'PickerDate', path: '/view/PickerDate' },
		{ name: 'PickerTime', path: '/view/PickerTime' },
		{ name: 'Popup', path: '/view/Popup' },
		{ name: 'Progress', path: '/view/Progress' },
		{ name: 'Radio', path: '/view/Radio' },
		{ name: 'Select', path: '/view/Select' },
		{ name: 'Bank', path: '/view/SelectBank' },
		{ name: 'Dropdown', path: '/view/SelectDropdown' },
		{ name: 'Slider', path: '/view/Slider' },
		{ name: 'Sortlist', path: '/view/Sortlist' },
		{ name: 'Tab', path: '/view/Tab' },
		{ name: 'Icons', path: '/view/Icons' },
	];

	// const pages = [
	// 	{ name: 'Button', path: '/button' },
	// 	{ name: 'Calendar', path: '/calendar' },
	// 	{ name: 'Card', path: '/card' },
	// 	{ name: 'Checkbox', path: '/checkbox' },
	// 	{ name: 'Collapse', path: '/collapse' },
	// 	{ name: 'Input', path: '/input' },
	// 	{ name: 'Business', path: '/business' },
	// 	{ name: 'DatePicker', path: '/datepicker' },
	// 	{ name: 'DateRange', path: '/daterange' },
	// 	{ name: 'File', path: '/file' },
	// 	{ name: 'License', path: '/license' },
	// 	{ name: 'Password', path: '/password' },
	// 	{ name: 'Phone', path: '/phone' },
	// 	{ name: 'Resident', path: '/resident' },
	// 	{ name: 'Search', path: '/search' },
	// 	{ name: 'Textarea', path: '/textarea' },
	// 	{ name: 'Pagination', path: '/pagination' },
	// 	{ name: 'Picker', path: '/picker' },
	// 	{ name: 'Date', path: '/date' },
	// 	{ name: 'Time', path: '/time' },
	// 	{ name: 'Popup', path: '/popup' },
	// 	{ name: 'Progress', path: '/progress' },
	// 	{ name: 'Radio', path: '/radio' },
	// 	{ name: 'Select', path: '/select' },
	// 	{ name: 'Bank', path: '/bank' },
	// 	{ name: 'Dropdown', path: '/dropdown' },
	// 	{ name: 'Slider', path: '/slider' },
	// 	{ name: 'Sortlist', path: '/sortlist' },
	// 	{ name: 'Tab', path: '/tab' },
	// 	{ name: 'Icons', path: '/icons' },
	// ];

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