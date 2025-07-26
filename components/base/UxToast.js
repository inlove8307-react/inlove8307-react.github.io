"use client";

import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxToast>
 * [props]
 *
 * [event]
 *
 */

const UxToast = ({ ref, ...props }) => {
	const baseClassName = 'ux-toast';

	return (
		<div className={baseClassName}>
			{props.message}
		</div>
	)
};

export default UxToast;