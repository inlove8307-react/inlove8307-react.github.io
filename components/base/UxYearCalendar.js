import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const UxYearCalendar = (props, ref) => {
	const baseClassName = 'ux-yearcalendar';
	const caseClassName = classnames(baseClassName, props.className);

	return (
		<div className={caseClassName}>
			{props.children}
		</div>
	)
};

export default React.forwardRef(UxYearCalendar);