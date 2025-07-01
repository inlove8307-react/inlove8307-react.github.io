import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
/* DND-KIT UxSortList */
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';
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
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: props.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			className={classnames(`${baseClassName}-item`, { active: isDragging })}
		>
			<div className={`${baseClassName}-base`}>
				<dl>
					<dt>
						{props.data.name}
					</dt>
					<dd>
						{props.data.info}
					</dd>
				</dl>
				<button
					type="button"
					className={`${baseClassName}-button`}
					{...attributes}
					{...listeners}
				>
					<UxIcon className="i023" size="1.8rem" />
				</button>
			</div>
		</div>
	);
};

/**
 * <UxSortList>
 * [props]
 *
 * [event]
 *
 */

const UxSortList = ({ ref, ...props }) => {
	const baseClassName = 'ux-sort';
	const caseClassName = classnames(baseClassName, props.className);
	const [items, setItems] = useState(props.items);
	const [mounted, setMounted] = useState(false);

	function handleDragEnd(event) {
		const { active, over } = event;

		if (active.id !== over?.id) {
			setItems((items) => {
				const oldIndex = items.findIndex((item) => item.id === active.id);
				const newIndex = items.findIndex((item) => item.id === over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className={caseClassName}>
			<div className={`${baseClassName}-list`}>
				<DndContext
					modifiers={[restrictToParentElement]}
					onDragEnd={handleDragEnd}
				>
					<SortableContext items={items}>
						{
							mounted &&
							items.map((item) => (
								<UxSortItem
									key={item.id}
									id={item.id}
									data={item}
								/>
							))
						}
					</SortableContext>
				</DndContext>
			</div>
		</div>
	);
};

export default UxSortList;