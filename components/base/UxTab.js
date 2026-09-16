"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import { getArray, getSlot, mergeProps, sleep } from '@/utils/core';
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
	const [selected, setSelected] = useState(props.selected);
	const [isChange, setIsChange] = useState(false);
	const [isLinear, setIsLinear] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const [isSynced, setIsSynced] = useState(false);
	const [inViewState, setInViewState] = useState([]);
	const [beforeRef, beforeInView] = useInView();
	const [afterRef, afterInView] = useInView();
	const summaryRef = useRef([]);
	const detailsRef = useRef([]);
	const linearRef = useRef();
	const scrollRef = useRef();
	const summary = (() => {
		let result = [];

		getArray(props.children).map((item) => {
			result.push(getSlot(getArray(item.props.children), 'summary'));
		});

		return result;
	})();

	const handleClick = (index) => {
		isSynced
			?	detailsScroll(index)
			: setSelected(index);

		setIsChange(true);
		props.onChange && props.onChange(index);
	};

	const setLinear = (index) => {
		linearRef.current.style.width = `${summaryRef.current[index].clientWidth}px`;
		linearRef.current.style.left = `${summaryRef.current[index].offsetLeft}px`;
	};

	const summaryScroll = (index) => {
		summaryRef.current[index].scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth",
		});
	};

	const detailsScroll = (index) => {
		detailsRef.current[index].node.scrollIntoView({
			block: 'start',
			inline: 'nearest',
			behavior: 'smooth',
		});
	};

	const handleInView = (inView, entry) => {
		const index = Number(entry.target.dataset.index);

		setInViewState((prev) => {
			const array = [...prev];

			array[index] = inView;

			return array;
		});
	};

	useEffect(() => {
		let isChange = false;

		inViewState.map((inView, index) => {
			if (inView) {
				if (!isChange) {
					isChange = true;
					setSelected(index);
					setIsChange(true);
				}
			}
		});
	}, [inViewState]);

	useEffect(() => {
		if (!props.className) return;

		props.className.includes('linear') && setIsLinear(true);
		props.className.includes('block') && setIsLinear(true);
		props.className.includes('scroll') && setIsScroll(true);
		props.className.includes('synced') && setIsScroll(true);
		props.className.includes('synced') && setIsSynced(true);
	}, [props.className]);

	useEffect(() => {
		if (!summary.length) return;

		isLinear &&	setLinear(selected);
		isScroll && isChange && summaryScroll(selected);
	}, [selected]);

	useEffect(() => {
		!isSynced && setSelected(parseInt(props.selected));
	}, [props.selected]);

	useEffect(() => {
		!selected && setSelected(0);
	}, []);

	return (
		<div
			ref={ref}
			className={classnames(baseClassName, props.className, {
				linear: isLinear,
				scroll: isScroll,
				synced: isSynced,
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
									ref={(element) => summaryRef.current[index] = element}
									key={index}
									type="button"
									className={classnames(`${baseClassName}-button`, {active})}
									onClick={() => handleClick(index)}
								>
									{item.props.children}
							</button>
							)
						})}
						{
							isLinear &&
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
				{
					!isSynced &&
					getArray(props.children).map((item, index) => {
						const active = selected === index;

						return mergeProps(item, {
							key: index,
							active,
						});
					})
				}
				{
					isSynced &&
					getArray(props.children).map((item, index) => (
						<InView
							key={index}
							ref={(inView) => (detailsRef.current[index] = inView)}
							rootMargin={`-${props.rootMargin}px`}
							threshold={.1}
							onChange={handleInView}
						>
							{({ inView, ref }) => (
								mergeProps(item, {
									key: index,
									ref: ref,
									style: { scrollMargin: `${props.rootMargin}px` },
									index,
								})
							)}
						</InView>
					))
				}
			</div>
		</div>
	);
};

export default UxTab;