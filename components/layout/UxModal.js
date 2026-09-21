"use client";

import React, { useContext, useEffect, useState, useRef } from 'react';
import { RootContext } from '@/context/RootContext';
import { AnimatePresence, motion } from "motion/react";
import classnames from 'classnames';
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";

const UxModal = ({ ref, ...props }) => {
	const baseClassName = 'ux-modal';
	const modalRef = useRef();
	const baseRef = useRef();
	const backdropRef = useRef();
	const {rootContext} = useContext(RootContext);

	useEffect(() => {
		const html = document.documentElement;
		const scrollbarWidth = window.innerWidth - html.clientWidth;

		if (rootContext.modals.length) {
			html.classList.add('modal');
			html.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
		}
		else {
			html.classList.remove('modal');
		}
	}, [rootContext.modals]);

	useEffect(() => {
		props.delay && setTimeout(() => props.onClose(), props.delay);
	}, []);

	const variants = {
		center: {
			initial: { scale: .75 },
			animate: { scale: 1 },
			exit: { scale: .75 },
		},
		bottom: {
			initial: { translateY: '100%' },
			animate: { translateY: '0%' },
			exit: { translateY: '100%' },
		},
		default: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
		},
	};

	return (
		<UxContainer className="modal">
			<AnimatePresence mode="sync">
				{rootContext.modals.map(({id, Component, props, onClose}) => {
					const caseClassName = classnames(baseClassName, props.baseClassName, props.caseClassName);
					let current = variants['default'];

					if (props.baseClassName.includes('center')) current = variants['center'];
					if (props.baseClassName.includes('bottom')) current = variants['bottom'];

					return (
						<div
							key={id}
							ref={modalRef}
							className={caseClassName}
						>
							<motion.div
								ref={backdropRef}
								role="presentation"
								className={`${baseClassName}-backdrop`}
								style={{ willChange: 'opacity' }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: .25, ease: 'easeInOut' }}
								onClick={onClose}
							/>
							<motion.div
								ref={baseRef}
								className={`${baseClassName}-base`}
								style={{ willChange: 'transform, opacity' }}
								variants={current}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: .25, ease: 'easeInOut' }}
							>
								<Component
									{...props}
									modalRef={modalRef}
									baseRef={baseRef}
									backdropRef={backdropRef}
									onClose={onClose}
								/>
							</motion.div>
						</div>
					);
				})}
			</AnimatePresence>
		</UxContainer>
	)
};

export default UxModal;