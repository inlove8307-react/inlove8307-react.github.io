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
	const tabsRef = useRef([]);
	const linearRef = useRef();
	const scrollRef = useRef();
	const summary = (() => {
		let result = [];

		getArray(props.children).map((item) => {
			result.push(getRole(getArray(item.props.children), 'summary'));
		});

		return result;
	})();

	const handleClick = (event, index) => {
		setSelected(index);
		setIsChange(true);
		props.onChange && props.onChange(event, index);
	};

	const setLinear = (index) => {
		setTimeout(() => {
			linearRef.current.style.width = `${tabsRef.current[index].clientWidth}px`;
			linearRef.current.style.left = `${tabsRef.current[index].offsetLeft}px`;
		}, 10);
	};

	const setScroll = (index) => {
		tabsRef.current[index].scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth"
		});
	};

	useEffect(() => {
		if (!summary.length) return;

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
					});
				})}
			</div>
		</div>
	);
};

export default UxTab;