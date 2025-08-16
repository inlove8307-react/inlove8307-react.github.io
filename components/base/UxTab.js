"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getArray, getRole, mergeProps } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxTab>
 * [props]
 * className(String): 추가 클래스
 * selected(Number): 선택 값
 * linear(Boolean): 선택 변경 시 라인 효과 여부
 * scroll(Boolean): 스크롤 여부
 * [event]
 * onChange(Func): 선택 변경 이벤트 콜백
 */

const UxTab = ({ ref, ...props }) => {
	const baseClassName = "ux-tab";
	const [selected, setSelected] = useState(props.selected || 0);
	const [isChange, setIsChange] = useState(false);
	const [beforeRef, beforeInView] = useInView();
	const [afterRef, afterInView] = useInView();
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

	const handleClick = (index) => {
		setSelected(index);
		setIsChange(true);
		props.onChange && props.onChange(index);
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
			className={classnames(baseClassName, props.className, {
				linear: props.linear,
				scroll: props.scroll,
				before: beforeInView,
				after: afterInView,
			})}>
			<div className={`${baseClassName}-base`}>
				<div
					ref={scrollRef}
					className={`${baseClassName}-scroll`}
				>
					<div className={`${baseClassName}-list`}>
						<span
							ref={beforeRef}
							className={`${baseClassName}-before`}
						/>
						{summary.map((item, index) => {
							const active = selected === index;

							return (
								<button
									ref={(element) => tabsRef.current[index] = element}
									key={index}
									className={classnames(`${baseClassName}-button`, {active})}
									onClick={() => handleClick(index)}
								>
									{item.props.children}
								</button>
							)
						})}
						{
							props.linear &&
							<span
								ref={linearRef}
								className={`${baseClassName}-linear`}
							/>
						}
						<span
							ref={afterRef}
							className={`${baseClassName}-after`}
						/>
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