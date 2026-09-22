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
		backdrop: {
			initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
			animate: { backgroundColor: 'rgba(0, 0, 0, .7)' },
			exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
		},
		center: {
			initial: { opacity: 0, scale: .85 },
			animate: { opacity: 1, scale: 1 },
			exit: { opacity: 0, scale: .85 },
		},
		bottom: {
			initial: { opacity: 0, translateY: '100%' },
			animate: { opacity: 1, translateY: '0%' },
			exit: { opacity: 0, translateY: '100%' },
		},
		default: {
			initial: { opacity: 0, filter: 'opacity(0%)' },
			animate: { opacity: 1, filter: 'opacity(100%)' },
			exit: { opacity: 0, filter: 'opacity(0%)' },
		},
	};

	return (
		<UxContainer className="modal">
			<AnimatePresence mode="sync">
				{rootContext.modals.map(({id, Component, props, onClose}) => {
					const caseClassName = classnames(baseClassName, props.baseClassName, props.caseClassName);
					const transition = { duration: .25, ease: 'easeInOut' };
					let current = variants['default'];

					switch (props.baseClassName) {
						case 'center': current = variants['center']; break;
						case 'bottom': current = variants['bottom']; break;
						case 'dropdown': transition.duration = 0; break;
					}

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
								variants={variants['backdrop']}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={transition}
								onClick={onClose}
							/>
							<motion.div
								ref={baseRef}
								className={`${baseClassName}-base`}
								variants={current}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={transition}
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