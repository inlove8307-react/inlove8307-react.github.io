import { useRef, useEffect } from "react";
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";
import UxHeader from "@/components/layout/UxHeader";
import UxMain from "@/components/layout/UxMain";
import UxFooter from "@/components/layout/UxFooter";

export default function Layout({ children }) {
	return (
		<UxContainer>
			<UxHeader />
			<UxMain>
				{children}
			</UxMain>
			<UxFooter />
		</UxContainer>
	)
}