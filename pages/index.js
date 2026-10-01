"use client";

import React, { useState } from "react";
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxForm from "@/components/base/UxForm";
import UxField from "@/components/base/UxField";
import UxInput from "@/components/base/UxInput";
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";
import UxCheckbox from "@/components/base/UxCheckbox";
import UxRadio from "@/components/base/UxRadio";
import UxButton from "@/components/base/UxButton";
import UxCollapse from "@/components/base/UxCollapse";
import UxTab from "@/components/base/UxTab";
import UxPanel from "@/components/base/UxPanel";
import UxPicker from "@/components/base/UxPicker";
/* POPUP */
import Popup from "@/components/popup/PopupNew";

export default function Home() {
	const modal = useModal();
	const [progress, setProgress] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const handleProgress = () => {
		let percent = progress + 25;
		if (percent > 100) percent = 0;
		setProgress(percent);
	};

	const handleLoaded = () => {
		setLoaded(!loaded);
	};

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>HOME</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							{/* CONTENTS */}
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	);
};