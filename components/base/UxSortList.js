import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
/* DND-KIT UxSortList */
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';
/* COMPONENT */
import UxSortItem from "@/components/base/UxSortItem";

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