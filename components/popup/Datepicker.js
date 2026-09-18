"use client";

import React, { useState, useEffect } from 'react';
import { format, set, getDate, getMonth, getYear } from "date-fns";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxCalendar from '@/components/base/UxCalendar';

/**
 * <Popup>
 * [props]
 *
 * [event]
 *
 */

const Popup = ({ ref, ...props }) => {
	const [dateFormat] = useState(props.format || 'yyyy.MM.dd');
	const [date, setDate] = useState('');
	const [value, setValue] = useState('');

	const handleClose = () => {
		props.onClose({ value });
	};

	const handleChange = (value) => {
		switch (props.role) {
			case 'date':
				setValue(value);
				break;
			case 'month':
				setValue(value + 1);
				break;
			case 'year':
				setValue(value);
				break;
			default:
				setValue(value);
		}
	};

	useEffect(() => {
		const rawDate = new Date();
		const date = props.value || getDate(rawDate);
		const month = props.value || getMonth(rawDate) + 1;
		const year = props.value || getYear(rawDate);

		switch (props.role) {
			case 'date':
				setValue(date);
				setDate(format(set(rawDate, { date: date }), dateFormat));
				break;
			case 'month':
				setValue(month);
				setDate(format(set(rawDate, { month: month - 1 }), dateFormat));
				break;
			case 'year':
				setValue(year);
				setDate(format(set(rawDate, { year: year }), dateFormat));
				break;
			default:
				setValue(props.value || format(rawDate, dateFormat));
				setDate(props.value || format(rawDate, dateFormat));
		}
	}, []);

	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxSubject>
						<h3>{props.title || '선택'}</h3>
						<UxButton onClick={props.onClose}>
							<i className="icon close" />
						</UxButton>
					</UxSubject>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle>
					<UxContent>
						<UxCalendar
							{...props}
							date={date}
							scrollIntoView
							onChange={handleChange}
						/>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						<UxButton
							className="primary h3"
							onClick={handleClose}
						>
							<span className="text">확인</span>
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	);
};

export default Popup;