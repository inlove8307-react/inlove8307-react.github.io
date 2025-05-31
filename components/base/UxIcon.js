import React from 'react';
import classnames from 'classnames';
import { mergeProps } from '@/utils/core';

/**
 * <UxIcon>
 * [props]
 *
 * [event]
 *
 */

const UxIcon = (props, ref) => {
	const baseClassName = 'ux-icon';
	const caseClassName = classnames(baseClassName, props.className);

	const Component = (props) => {
		const TagName = props.tagName || 'i';
		const events = {
			onClick: handleClick,
			onFocus: handleFocus,
			onBlur: handleBlur,
		}
		const element = (
			<TagName
				className={caseClassName}
				style={{
					width: props.size,
					height: props.size,
					backgroundColor: props.color
				}}
			/>
		);
		const buttonProps = {
			type: props.type || 'button',
			title: props.title,
			...events
		};
		const anchorProps = {
			href: props.href || '#',
			title: props.title,
			target: props.target,
			...events
		};

		switch(props.tagName){
			case 'button':
				return mergeProps(element, buttonProps);
			case 'a':
				return mergeProps(element, anchorProps);
			default:
				return element;
		};
	};

	const handleClick = (event) => {
		event.stopPropagation();
		event.preventDefault();
		props.onClick && props.onClick(event);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	};

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	};

	return	(
		<Component
			ref={ref}
			{...props}
		/>
	);
};

export default React.forwardRef(UxIcon);