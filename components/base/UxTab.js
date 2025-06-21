import React, { useState, useRef, useEffect } from 'react';
import { getArray, getRole, mergeProps } from '@/utils/core';
import classnames from 'classnames';

const UxTab = ({ ref, ...props }) => {
	const baseClassName = 'ux-tab-panel';
	const caseClassName = classnames(baseClassName, props.className , {
		active: props.active
	});
	const [details, setDetails] = useState();

	useEffect(() => {
		setDetails(getRole(getArray(props.children), 'details'));
	}, []);

	return (
		<div className={caseClassName}>
			{details && details.props.children}
		</div>
	)
};

export default UxTab;