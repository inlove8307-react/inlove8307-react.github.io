"use client";

import React, { useEffect, useState } from "react";
import { BrowserView } from "react-device-detect";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxButton from "@/components/base/UxButton";

const Page = ({ ref, ...props }) => {
	const [inputValue, setInputValue] = useState('');
	const [textareaValue, setTextareaValue] = useState('');
	const [copied, setCopied] = useState(false);

	const handleClick = async () => {
		await navigator.clipboard.writeText(textareaValue);
		setCopied(true);
	};

	useEffect(() => {
		const array = inputValue.split(',');
		const value = JSON.stringify(array);
		setTextareaValue(value);
		setCopied(false);
	}, [inputValue]);

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject>
					<h3>Array</h3>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxInput
							placeholder="ABC-123,"
							value={inputValue}
							onChange={(value) => setInputValue(value)}
						/>
						<UxInput
							role="textarea"
							readonly
							value={textareaValue}
						/>
						<UxButton
							className="tertiary h3"
							onClick={handleClick}
						>
							<i className="icon mask copy" />
							{!copied && <span>COPY</span>}
							{copied && <span>COPIED</span>}
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};

export default Page;