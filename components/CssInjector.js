'use client';

import { useEffect } from 'react';
import { isDesktop, isWindows, isMacOs, isMobile, isIOS, isAndroid, isChrome, isFirefox, isSafari, isEdge } from 'react-device-detect';
import classnames from 'classnames';
/* STYLES */
import "@/public/styles/icon.scss";
import "@/public/styles/component.scss";

export default function DeviceCssInjector() {
	useEffect(() => {
		const detect = classnames({
			desktop: isDesktop,
			windows: isWindows,
			macos: isMacOs,
			mobile: isMobile,
			ios: isIOS,
			aos: isAndroid,
			chrome: isChrome,
			firefox: isFirefox,
			safari: isSafari,
			edge: isEdge
		}).split(/\s+/g);

		document.documentElement.classList.add(...detect);
	}, []);

	return null;
}
