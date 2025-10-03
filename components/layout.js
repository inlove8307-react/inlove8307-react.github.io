'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import classnames from 'classnames';
import RootContextProvider from '@/context/RootContext';
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";
import UxHeader from "@/components/layout/UxHeader";
import UxMain from "@/components/layout/UxMain";
import UxAside from "@/components/layout/UxAside";
import UxFooter from "@/components/layout/UxFooter";
import UxModals from "@/components/layout/UxModals";

export default function Layout({ children }) {
	const router = useRouter();
	const { pathname } = router;
	const [path, setPath] = useState([]);

	useEffect(() => {
		setPath(pathname.split('/'));
	}, [pathname]);

	return (
		<RootContextProvider>
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
			<UxModals />
		</RootContextProvider>
	)
}