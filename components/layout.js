import React from "react";
import RootContextProvider from '@/context/RootContext';
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";
import UxHeader from "@/components/layout/UxHeader";
import UxMain from "@/components/layout/UxMain";
import UxAside from "@/components/layout/UxAside";
import UxFooter from "@/components/layout/UxFooter";
import UxModals from "@/components/layout/UxModals";

export default function Layout({ children }) {
	return (
		<RootContextProvider>
			<UxContainer>
				<UxHeader />
				<UxMain>
					<UxAside/>
					{children}
				</UxMain>
				<UxFooter />
			</UxContainer>
			<UxModals />
		</RootContextProvider>
	)
}