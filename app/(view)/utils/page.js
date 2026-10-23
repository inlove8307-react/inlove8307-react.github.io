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
import UxField from "@/components/base/UxField";
import UxInput from "@/components/base/UxInput";
import UxButton from "@/components/base/UxButton";

const Page = ({ ref, ...props }) => {
	const [arrayValue, setArrayValue] = useState('');
	const [arrayTrans, setArrayTrans] = useState('');
	const [arrayCount, setArrayCount] = useState('');
	const [arrayCopied, setArrayCopied] = useState(false);
	const [jsonValue, setJsonValue] = useState('');
	const [jsonTrans, setJsonTrans] = useState('');
	const [jsonCopied, setJsonCopied] = useState(false);

	const handleArray = async () => {
		const string = arrayTrans.replace(/,\s""/g, '');
		await navigator.clipboard.writeText(string);
		setArrayTrans(string);
		setArrayCopied(true);
	};

	const handleJson = async () => {
		const string = jsonTrans.slice(1, -1).trim();
		await navigator.clipboard.writeText(string);
		setJsonCopied(true);
	};

	useEffect(() => {
		const array = arrayValue.replace(/\s+/g, '').split(',');
		const string = JSON.stringify(array).replace(/,/g, ', ');
		setArrayCount(array.length);
		setArrayTrans(string);
		setArrayCopied(false);
	}, [arrayValue]);

	useEffect(() => {
		try {
			const parsed = JSON.parse(jsonValue);
			const beautified = JSON.stringify(parsed, null, '\t');
			setJsonTrans(beautified);
		}
		catch (error) {
			setJsonTrans('It is not in JSON format.');
		}
		setJsonCopied(false);
	}, [jsonValue]);

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
							<i className={classnames('icon mask copy x20', { disabled: arrayCopied })} />
							<em className={classnames('fw700', { disabled: arrayCopied })}>
								{!arrayCopied ? 'Copy' : 'Copied'}
							</em>
						</UxButton>
					</UxSubject>
					<UxContent>
						<UxGroup className="col2">
							<UxField>
								<UxInput
									role="textarea"
									value={arrayValue}
									onChange={(value) => setArrayValue(value)}
								/>
								<p className="fw500 fs18">length <em className="red fw700">{arrayCount}</em></p>
							</UxField>
							<UxField>
								<UxInput
									role="textarea"
									value={arrayTrans}
									readonly
								/>
							</UxField>
						</UxGroup>
					</UxContent>
				</UxArticle>
				<UxArticle className="h4 space">
					<UxSubject className="row">
						<h4>JSON</h4>
						<UxButton
							onClick={handleJson}
						>
							<i className={classnames('icon mask copy x20', { disabled: jsonCopied })} />
							<em className={classnames('fw700', { disabled: jsonCopied })}>
								{!jsonCopied ? 'Copy' : 'Copied'}
							</em>
						</UxButton>
					</UxSubject>
					<UxContent>
						<UxGroup className="col2">
							<UxField>
								<UxInput
									role="textarea"
									value={jsonValue}
									onChange={(value) => setJsonValue(value)}
								/>
							</UxField>
							<UxField>
								<UxInput
									role="textarea"
									value={jsonTrans}
									readonly
								/>
							</UxField>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};

export default Page;