"use client";

import React from "react";
import Link from 'next/link'
import classnames from "classnames";

const UxAside = ({ ref, ...props }) => {
	const baseClassName = 'ux-aside';
	const caseClassName = classnames(baseClassName, props.className);

	const data = [
		{ name: 'Button', url: '/view/guide/button' },
		{ name: 'Input', url: '/view/guide/input' },
		{ name: 'Password', url: '/view/guide/password' },
		{ name: 'Textarea', url: '/view/guide/textarea' },
		{ name: 'File', url: '/view/guide/file' },
		{ name: 'Phone', url: '/view/guide/phone' },
		{ name: 'Rrn', url: '/view/guide/rrn' },
		{ name: 'Lrn', url: '/view/guide/lrn' },
		{ name: 'Brn', url: '/view/guide/brn' },
		{ name: 'Select', url: '/view/guide/select' },
		{ name: 'DatePicker', url: '/view/guide/datepicker' },
		{ name: 'MonthPicker', url: '/view/guide/monthpicker' },
		{ name: 'YearPicker', url: '/view/guide/yearpicker' },
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
		{ name: 'DateCalendar', url: '/view/guide/datecalendar' },
		{ name: 'MonthCalendar', url: '/view/guide/monthcalendar' },
		{ name: 'YearCalendar', url: '/view/guide/yearcalendar' },
		{ name: 'SortList', url: '/view/guide/sortlist' },
	];

	return (
		<aside className={caseClassName}>
			<ul className={`${baseClassName}-list`}>
				{data.map((item, index) => (
					<li
						key={index}
						className={`${baseClassName}-item`}
					>
						<Link
							className={`${baseClassName}-link`}
							href={item.url}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	)
};

export default UxAside;