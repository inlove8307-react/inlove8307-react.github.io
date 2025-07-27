"use client";

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { AnimatePresence, motion } from "motion/react";

/**
 * <UxModal>
 * [props]
 *
 * [event]
 *
 */

const UxModal = ({ ref, ...props }) => {
	const baseClassName = 'ux-modal';
	const caseClassName = classnames(baseClassName, props.className);
	const [active, setActive] = useState(false);

	useEffect(() => {
		props.delay && setTimeout(() => props.onClose(), props.delay);
	}, []);

	return (
		<AnimatePresence>
			<motion.div
				className={classnames(caseClassName, { active })}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: .15 }}
				onAnimationStart={() => setActive(true)}
			>
				<div
					role="presentation"
					className={`${baseClassName}-backdrop`}
					onClick={props.onClose}
				/>
				<div
					className={`${baseClassName}-base`}
				>
					{props.children}
				</div>
			</motion.div>
		</AnimatePresence>
	)
};

export default UxModal;