import React, { useState, useRef, useEffect } from 'react';
import { getArray, getRole, mergeProps } from '@/utils/core';
import classnames from 'classnames';

const UxTab = ({ ref, ...props }) => {
	const originClassName = "ux-tab";
	const mixinClassName = classnames(originClassName, props.className, {
		linear: props.linear,
		scroll: props.scroll
	});
	const [selected, setSelected] = useState(props.selected || 0);
	const [isChange, setIsChange] = useState(false);
	const [summary, setSummary] = useState([]);
	const tabsRef = useRef([]);
	const linearRef = useRef();
	const scrollRef = useRef();
	let slotArray = [];

	const handleSlot = (slot) => {
		slotArray.push(slot);
		setSummary(slotArray);
	};

	const handleClick = (event, index) => {
		setSelected(index);
		setIsChange(true);
		props.onChange && props.onChange(event, index);
	};

	const setLinear = (index) => {
		setTimeout(() => {
			linearRef.current.style.width = `${tabsRef.current[index].clientWidth}px`;
			linearRef.current.style.left = `${tabsRef.current[index].offsetLeft}px`;
		}, 1);
	};

	const setScroll = (index) => {
		tabsRef.current[index].scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth"
		});
	};

	useEffect(() => {
		props.linear && setLinear(selected);
		props.scroll && isChange && setScroll(selected);
	}, [selected]);

	return (
		<div
			ref={ref}
			className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<div
					ref={scrollRef}
					className={`${originClassName}-scroll`}
				>
					<div className={`${originClassName}-list`}>
						{summary.map((item, index) => {
							const active = selected === index;

							return (
								<button
									ref={(element) => tabsRef.current[index] = element}
									key={index}
									className={classnames(`${originClassName}-button`, {active})}
									onClick={(event) => handleClick(event, index)}
								>
									{item.props.children}
								</button>
							)
						})}
						{
							props.linear &&
							<span
								ref={linearRef}
								className={`${originClassName}-linear`}
							/>
						}
					</div>
				</div>
				{getArray(props.children).map((item, index) => {
					const active = selected === index;

					return mergeProps(item, {
						key: index,
						active,
						onSlot: handleSlot
					});
				})}
			</div>
		</div>
	);
};

export default UxTab;