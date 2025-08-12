"use client";

import React, { useContext } from 'react';
import { RootContext } from '@/context/RootContext';
/* COMPONENT */
import UxModal from '@/components/base/UxModal';

const UxModals = ({ ref, ...props }) => {
	const baseClassName = 'ux-modal';
	const {rootContext} = useContext(RootContext);

	return (
		<div className={`${baseClassName}-group`}>
			{rootContext.modals.map(({ Component, props, onClose }, index) => (
				<UxModal
					key={index}
					{...props}
					onClose={onClose}
				>
					<Component
						{...props}
						onClose={onClose}
					/>
				</UxModal>
			))}
		</div>
	)
};

export default UxModals;