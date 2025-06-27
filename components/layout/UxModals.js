import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import { RootContext } from '@/context/RootContext';
import $ from 'jquery';
/* COMPONENT */
import UxModal from '@/components/base/UxModal';

const UxModals = ({ ref, ...props }) => {
	const baseClassName = 'ux-modals';
	const caseClassName = classnames(baseClassName, props.className);
	const {rootContext} = useContext(RootContext);

	useEffect(() => {
		rootContext.modals.length
			? $('html').addClass('modal')
			: $('html').removeClass('modal');
	}, [rootContext.modals]);

	return (
		<div className={caseClassName}>
			{rootContext.modals.map(({ Component, props, onClose }, index) => (
				<Component
					key={index}
					{...props}
					onClose={onClose}
				/>
			))}
		</div>
	)
};

export default UxModals;