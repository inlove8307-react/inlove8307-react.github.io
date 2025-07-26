"use client";

import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import { RootContext } from '@/context/RootContext';
import $ from 'jquery';
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