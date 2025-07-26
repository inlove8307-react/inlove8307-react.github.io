"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxGrid>
 * [props]
 *
 * [event]
 *
 */

const UxGrid = ({ ref, ...props }) => {
	const baseClassName = 'ux-grid';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxGrid;