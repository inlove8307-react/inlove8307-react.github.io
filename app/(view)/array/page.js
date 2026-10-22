"use client";

import React, { useEffect, useState } from "react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxInput from "@/components/base/UxInput";
import UxButton from "@/components/base/UxButton";

const Page = ({ ref, ...props }) => {
	const [array, setArray] = useState('');
	const [arrayTrans, setArrayTrans] = useState('');
	const [arrayCopied, setArrayCopied] = useState(false);
	const [json, setJson] = useState('');
	const [jsonTrans, setJsonTrans] = useState('');
	const [jsonCopied, setJsonCopied] = useState(false);

	const handleArray = async () => {
		await navigator.clipboard.writeText(arrayTrans);
		setArrayCopied(true);
	};

	const handleJson = async () => {
		const string = jsonTrans.slice(1, -1).trim();
		await navigator.clipboard.writeText(string);
		setJsonCopied(true);
	};

	useEffect(() => {
		if (!array) return;
		const split = array.split(',');

		setArrayTrans(JSON.stringify(split));
		setArrayCopied(false);
	}, [array]);

	useEffect(() => {
		const parsed = JSON.parse(json || null);
		const beautified = JSON.stringify(parsed, null, '\t');

		setJsonTrans(beautified);
		setJsonCopied(false);
	}, [json]);

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject>
					<h3>Utils</h3>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxSubject className="row">
						<h4>Array</h4>
						<UxButton
							onClick={handleArray}
						>
							<i className={classnames('icon mask copy', { muted: arrayCopied })} />
						</UxButton>
					</UxSubject>
					<UxContent>
						<UxGroup className="col2">
							<UxInput
								role="textarea"
								value={array}
								onChange={(value) => setArray(value)}
							/>
							<UxInput
								role="textarea"
								readonly
								value={arrayTrans}
							/>
						</UxGroup>
						<UxGroup className="col1">

						</UxGroup>
					</UxContent>
				</UxArticle>
				<UxArticle className="h4 space">
					<UxSubject className="row">
						<h4>JSON</h4>
						<UxButton
							onClick={handleJson}
						>
							<i className={classnames('icon mask copy', { muted: jsonCopied })} />
						</UxButton>
					</UxSubject>
					<UxContent>
						<UxGroup className="col2">
							<UxInput
								role="textarea"
								value={json}
								onChange={(value) => setJson(value)}
							/>
							<UxInput
								role="textarea"
								readonly
								value={jsonTrans}
							/>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};

export default Page;