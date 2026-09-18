'use client';

import { useContext } from 'react';
import { getRandomChar } from '@/utils/core';
import { RootContext } from '@/context/RootContext';
import UxAlert from '@/components/base/UxAlert';
import UxConfirm from '@/components/base/UxConfirm';
import UxToast from '@/components/base/UxToast';

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
			baseClassName: 'center'
		});
	};

	const bottom = (Component, props) => {
		return createModal(Component, {
			...props,
			baseClassName: 'bottom'
		});
	};

	const full = (Component, props) => {
		return createModal(Component, {
			...props,
			baseClassName: 'full'
		});
	};

	const alert = (message) => {
		return createModal(UxAlert, {
			baseClassName: 'center',
			message,
		});
	};

	const confirm = (message) => {
		return createModal(UxConfirm, {
			baseClassName: 'center',
			message,
		});
	};

	const toast = (message, props) => {
		return createModal(UxToast, {
			...props,
			baseClassName: 'toast',
			message,
		});
	};

	const popover = (Component, props) => {
		return createModal(Component, {
			...props,
			baseClassName: 'popover',
		});
	};

	const tooltip = (Component, props) => {
		return createModal(Component, {
			...props,
			baseClassName: 'tooltip',
		});
	};

	const dropdown = (Component, props) => {
		return createModal(Component, {
			...props,
			baseClassName: 'dropdown',
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
		dropdown,
	};
};

export default useModal;