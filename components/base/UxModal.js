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

	return (
		<div className={classnames(caseClassName)}>
			<div
				role="presentation"
				className={`${baseClassName}-backdrop`}
				onClick={props.onClose}
			/>
			<div className={`${baseClassName}-base`}>
				{props.children}
			</div>
		</div>
	)
};

export default UxModal;