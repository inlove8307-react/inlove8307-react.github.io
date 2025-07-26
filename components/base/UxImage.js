import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxImage>
 * [props]
 *
 * [event]
 *
 */

const UxImage = ({ ref, ...props }) => {
	const baseClassName = 'ux-image';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default UxImage;