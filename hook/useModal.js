'use client';

import { useContext, useEffect } from 'react';
import { getRandomChar } from '@/utils/core';
import { RootContext } from '@/context/RootContext';
import UxAlert from '@/components/base/UxAlert';
import UxConfirm from '@/components/base/UxConfirm';

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

	const openModal = (Component, props, className) => {
		return createModal(Component, { ...props, className });
	};

	const openAlert = (message) => {
		return createModal(UxAlert, { message, className: 'center' });
	};

	const openConfirm = (message) => {
		return createModal(UxConfirm, { message, className: 'center' });
	};

	return {
		openModal,
		openAlert,
		openConfirm,
	};
};

export default useModal;