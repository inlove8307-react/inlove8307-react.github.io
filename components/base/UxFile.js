"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxFile>
 * [props]
 *
 * [event]
 *
 */

const UxFile = ({ ref, ...props }) => {
	const baseClassName = 'ux-file';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxFile;