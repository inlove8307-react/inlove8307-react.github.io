// import { headers, cookies } from 'next/headers';
/* CONTEXT */
import RootContextProvider from '@/context/RootContext';
/* CSS */
import CssInjector from "@/components/CssInjector";
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";
import UxHeader from "@/components/layout/UxHeader";
import UxMain from "@/components/layout/UxMain";
import UxFooter from "@/components/layout/UxFooter";
import UxModal from "@/components/layout/UxModal";

export const metadata = {
	title: 'Guide',
	description: 'React Component Guide',
	icons: {
		icon: [
			// { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			// { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon/favicon.ico', type: 'image/x-icon' },
		],
		apple: [
			{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
	},
	manifest: '/favicon/site.webmanifest',
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: 'no',
	viewportFit: 'cover',
};

export default async function RootLayout({ children }) {
	// const header = await headers();
	// const cookie = await cookies();

	return (
		<html lang="ko">
			<body>
				<CssInjector />
				<RootContextProvider>
					<UxContainer>
						<UxHeader />
						<UxMain>
							{children}
						</UxMain>
						<UxFooter />
					</UxContainer>
					<UxModal />
				</RootContextProvider>
			</body>
		</html>
	)
}