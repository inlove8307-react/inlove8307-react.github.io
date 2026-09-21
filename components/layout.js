'use client';

import React, { useMemo } from "react";
import { useRouter } from 'next/router';
import classnames from 'classnames';
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";
import UxHeader from "@/components/layout/UxHeader";
import UxMain from "@/components/layout/UxMain";
import UxAside from "@/components/layout/UxAside";
import UxFooter from "@/components/layout/UxFooter";
import UxModal from "@/components/layout/UxModal";

export default function Layout({ children }) {
	const router = useRouter();
	const { pathname } = router;

	const path = useMemo(() => {
		return pathname.split('/');
	}, [pathname]);

	return (
		<>
			<UxContainer className={classnames({
				guide: path.includes('guide')
			})}>
				<UxHeader />
				<UxMain>
					{path.includes('guide') && <UxAside />}
					{children}
				</UxMain>
				<UxFooter />
			</UxContainer>
			<UxModal />
		</>
	)
}