"use client";

import React, { useState } from "react";
import { useRouter } from 'next/router';
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxRadio from "@/components/base/UxRadio";
import UxGroup from "@/components/base/UxGroup";

const UxAside = ({ ref, ...props }) => {
	const baseClassName = 'ux-aside';
	const caseClassName = classnames(baseClassName, props.className);
	const router = useRouter();
	const [selected, setSelected] = useState('0');
	const [expanded, setExpanded] = useState(false);
	const data = [
		{ name: 'Button', url: '/view/guide/button' },
		{ name: 'Input', url: '/view/guide/input' },
		{ name: 'Textarea', url: '/view/guide/textarea' },
		{ name: 'File', url: '/view/guide/file' },
		{ name: 'Select', url: '/view/guide/select' },
		{ name: 'Picker', url: '/view/guide/picker' },
		{ name: 'DatePicker', url: '/view/guide/datepicker' },
		{ name: 'Checkbox', url: '/view/guide/checkbox' },
		{ name: 'Switch', url: '/view/guide/switch' },
		{ name: 'Radio', url: '/view/guide/radio' },
		{ name: 'Toggle', url: '/view/guide/toggle' },
		{ name: 'Card', url: '/view/guide/card' },
		{ name: 'Collapse', url: '/view/guide/collapse' },
		{ name: 'Tab', url: '/view/guide/tab' },
		{ name: 'Modal', url: '/view/guide/modal' },
		{ name: 'Pagination', url: '/view/guide/pagination' },
		{ name: 'Slider', url: '/view/guide/slider' },
		{ name: 'Progress', url: '/view/guide/progress' },
		{ name: 'Calendar', url: '/view/guide/calendar' },
		{ name: 'SortList', url: '/view/guide/sortlist' },
		{ name: 'Icons', url: '/view/guide/icons' },
	];

	const handleChange = (index) => {
		router.push(data[index || 0].url);
		setSelected(index);
		setExpanded(false);
	}

	const handleExpand = (value) => {
		setExpanded(value);
	}

	return (
		<UxSection className={caseClassName}>
			<UxArticle className="h4 space">
				<UxContent>
					<UxGroup
						role="radio"
						className="chip"
						scroll
						expand
						selected={selected}
						expanded={expanded}
						onChange={(value) => handleChange(value)}
						onExpand={(value) => handleExpand(value)}
					>
						{
							data.map((item, index) => (
								<UxRadio
									key={index}
									value={String(index)}
								>
									{item.name}
								</UxRadio>
							))
						}
					</UxGroup>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};

export default UxAside;