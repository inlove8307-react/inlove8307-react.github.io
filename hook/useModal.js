'use client';

import { useContext, useEffect } from 'react';
import { getRandomChar } from '@/utils/core';
import { RootContext } from '@/context/RootContext';
import UxAlert from '@/components/base/UxAlert';
import UxConfirm from '@/components/base/UxConfirm';
import UxToast from '@/components/base/UxToast';
import UxPopover from '@/components/base/UxPopover';
import UxTooltip from '@/components/base/UxTooltip';

const useModal = () => {
	const {rootContext, setRootContext} = useContext(RootContext);

	const createModal = (Component, props) => {
		return new Promise((resolve, reject) => {
			const id = getRandomChar();

			const onClose = (data = {}) => {
				setRootContext(prev => ({
					...prev,
					modals: prev.modals.filter(item => item.id !== id),
				}));

				resolve(data);
			};

			const modal = {
				id,
				Component,
				props,
				onClose,
			};

			setRootContext(prev => ({
				...prev,
				modals: [...prev.modals, modal],
			}));
		});
	};

	const center = (Component, props) => {
		return createModal(Component, {
			...props,
			className: 'center'
		});
	};

	const bottom = (Component, props) => {
		return createModal(Component, {
			...props,
			className: 'bottom'
		});
	};

	const full = (Component, props) => {
		return createModal(Component, {
			...props,
			className: 'full'
		});
	};

	const alert = (message) => {
		return createModal(UxAlert, {
			className: 'center',
			message,
		});
	};

	const confirm = (message) => {
		return createModal(UxConfirm, {
			className: 'center',
			message,
		});
	};

	const toast = (message, props) => {
		return createModal(UxToast, {
			...props,
			className: 'toast',
			message,
		});
	};

	const popover = (Component, props) => {
		return createModal(Component, {
			...props,
			className: 'popover',
		});
	};

	const tooltip = (Component, props) => {
		return createModal(Component, {
			...props,
			className: 'tooltip',
		});
	};

	return {
		center,
		bottom,
		full,
		alert,
		confirm,
		toast,
		popover,
		tooltip,
	};
};

export default useModal;