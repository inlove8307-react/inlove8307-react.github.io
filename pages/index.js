'use client';

import React, { useState, useRef, useEffect } from "react";
import { slotArray, mergeProps, getRole, getRandomChar } from "@/utils/core";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";


export default function Home() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject>
					<h3>Home</h3>
				</UxSubject>
				<UxContent>
					<p>Home</p>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
}