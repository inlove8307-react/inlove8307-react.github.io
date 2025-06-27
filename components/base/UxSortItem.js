import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
/* DND-KIT UxSortItem */
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
/* COMPONENT */
import UxIcon from "@/components/base/UxIcon";

/**
 * <UxSortItem>
 * [props]
 *
 * [event]
 *
 */

const UxSortItem = ({ ref, ...props }) => {
	const baseClassName = 'ux-sort';
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id: props.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}

			className={classnames(`${baseClassName}-item`, { active: isDragging })}
		>
			<div className={`${baseClassName}-base`}>
				<span className={`${baseClassName}-label`}>
					{props.data.label}
				</span>
				<button
					ref={setActivatorNodeRef}
					{...listeners}
					type="button"
					className={`${baseClassName}-button`}
				>
					<UxIcon className="i023" size="1.6rem" />
				</button>
			</div>
		</div>
	);
};

export default UxSortItem;