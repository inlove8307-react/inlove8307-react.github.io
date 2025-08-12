import React, { useState } from "react";
import RootContextProvider from '@/context/RootContext';
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";
import UxHeader from "@/components/layout/UxHeader";
import UxMain from "@/components/layout/UxMain";
import UxAside from "@/components/layout/UxAside";
import UxFooter from "@/components/layout/UxFooter";
import UxModals from "@/components/layout/UxModals";

export default function Layout({ children }) {
	const [active, setActive] = useState(false);

	const handleClick = (value) => {
		setActive(value);
	};

	return (
		<RootContextProvider>
			<UxContainer>
				<UxHeader
					active={active}
					onClick={handleClick}
				/>
				<UxMain>
					<UxAside
						active={active}
						onClick={handleClick}
					/>
					{children}
				</UxMain>
				<UxFooter />
			</UxContainer>
			<UxModals />
		</RootContextProvider>
	)
}