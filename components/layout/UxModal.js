"use client";

import React, { useContext, useEffect, useState, useRef } from 'react';
import { RootContext } from '@/context/RootContext';
import { AnimatePresence, motion } from "motion/react";
import classnames from 'classnames';
/* LAYOUT */
import UxContainer from "@/components/layout/UxContainer";

const UxModal = ({ ref, ...props }) => {
	const baseClassName = 'ux-modal';
	const caseClassName = classnames(baseClassName, props.className);
	const {rootContext} = useContext(RootContext);
	const [active, setActive] = useState(false);

	useEffect(() => {
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

		if (rootContext.modals.length) {
			document.documentElement.classList.add('modal');
			document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
		}
		else {
			document.documentElement.classList.remove('modal');
			setActive(false);
		}
	}, [rootContext.modals]);

	useEffect(() => {
		props.delay && setTimeout(() => props.onClose(), props.delay);
	}, []);

	const modalRef = useRef();
	const baseRef = useRef();
	const backdropRef = useRef();

	return (
		<UxContainer className="modal">
			{rootContext.modals.map(({Component, props, onClose}, index) => (
				<AnimatePresence
					key={index}
				>
					<motion.div
						ref={modalRef}
						className={classnames(caseClassName, props.baseClassName, props.caseClassName, { active })}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: .15 }}
						onAnimationStart={() => setActive(true)}
					>
						<div
							ref={backdropRef}
							role="presentation"
							className={`${baseClassName}-backdrop`}
							onClick={onClose}
						/>
						<div
							ref={baseRef}
							className={`${baseClassName}-base`}
						>
							<Component
								{...props}
								modalRef={modalRef}
								baseRef={baseRef}
								backdropRef={backdropRef}
								onClose={onClose}
							/>
						</div>
					</motion.div>
				</AnimatePresence>
			))}
		</UxContainer>
	)
};

export default UxModal;