"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import { getArray, getSlot, mergeProps } from '@/utils/core';
import classnames from 'classnames';

/**
 * <Summary>
 * [props]
 *
 * [event]
 *
 */

const Summary = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const [isActive, setIsActive] = useState(false);
	const [beforeRef, beforeInView] = useInView();
	const [afterRef, afterInView] = useInView();
	const summaryRef = useRef([]);
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
		setIsActive(true);
		props.onClick && props.onClick(index);
	};

	const setLinear = (index) => {
		linearRef.current.style.width = `${summaryRef.current[index]?.clientWidth}px`;
		linearRef.current.style.left = `${summaryRef.current[index]?.offsetLeft}px`;
	};

	const summaryScroll = (index) => {
		summaryRef.current[index]?.scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth",
		});
	};

	useEffect(() => {
		props.onScroll && props.onScroll({
			beforeInView,
			afterInView,
		});
	}, [beforeInView, afterInView]);

	useEffect(() => {
		if (props.isSynced) return;

		props.isLinear && setLinear(props.selected);
		props.isScroll && isActive && summaryScroll(props.selected);
	}, [props.selected]);

	useEffect(() => {
		if (!props.isSynced) return;

		summaryScroll(props.scrolled);
	}, [props.scrolled]);

	return (
		<div
			ref={scrollRef}
			className={`${baseClassName}-scroll`}
		>
			<div className={`${baseClassName}-list`}>
				<span
					ref={beforeRef}
					className={`${baseClassName}-before`}
				/>
				{summary.map((item, index) => (
					<button
						ref={(element) => summaryRef.current[index] = element}
						key={index}
						type="button"
						className={classnames(`${baseClassName}-button`, {
							active: props.selected === index
						})}
						onClick={() => handleClick(index)}
					>
						{item.props.children}
					</button>
				))}
				{
					props.isLinear &&
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
	);
};

/**
 * <Details>
 * [props]
 *
 * [event]
 *
 */

const Details = ({ ref, ...props }) => {
	const [state, setState] = useState([]);
	const detailsRef = useRef([]);

	const detailsScroll = (index) => {
		detailsRef.current[index]?.node.scrollIntoView({
			block: 'start',
			inline: 'nearest',
			behavior: 'smooth',
		});
	};

	const handleInView = (inView, entry) => {
		setState((prev) => {
			const array = [...prev];
			array[Number(entry.target.dataset.index)] = inView;
			return array;
		});
	};

	useEffect(() => {
		let updated = false;

		state.map((inView, index) => {
			if (inView && !updated) {
				updated = true;
				props.onChange && props.onChange(index);
			}
		});
	}, [state]);

	useEffect(() => {
		detailsScroll(props.scrolled);
	}, [props.scrolled]);

	return (
		<>
			{
				!props.isSynced &&
				getArray(props.children).map((item, index) => (
					mergeProps(item, {
						key: index,
						active: props.selected === index,
					})
				))
			}
			{
				props.isSynced &&
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
		</>
	);
};

/**
 * <UxTab>
 * [props]
 *
 * [event]
 *
 */

const UxTab = ({ ref, ...props }) => {
	const baseClassName = "ux-tab";
	const [selected, setSelected] = useState(props.selected);
	const [scrolled, setScrolled] = useState(0);
	const [isLinear, setIsLinear] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const [isSynced, setIsSynced] = useState(false);
	const [beforeInView, setBeforeInView] = useState();
	const [afterInView, setAfterInView] = useState();

	const handleClick = (index) => {
		isSynced
			? setScrolled(index)
			: setSelected(index);

		props.onChange && props.onChange(index);
	};

	const handleChange = (index) => {
		setSelected(index);
	};

	const handleScroll = ({beforeInView, afterInView}) => {
		setBeforeInView(beforeInView);
		setAfterInView(afterInView);
	};

	useEffect(() => {
		isNaN(Number(props.selected))
			? setSelected(0)
			: setSelected(Number(props.selected));
	}, [props.selected]);

	useEffect(() => {
		props.className?.includes('linear') && setIsLinear(true);
		props.className?.includes('block') && setIsLinear(true);
		props.className?.includes('scroll') && setIsScroll(true);
		props.className?.includes('synced') && setIsScroll(true);
		props.className?.includes('synced') && setIsSynced(true);
	}, [props.className]);

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
				<Summary
					{...props}
					baseClassName={baseClassName}
					isLinear={isLinear}
					isScroll={isScroll}
					isSynced={isSynced}
					selected={selected}
					scrolled={scrolled}
					onClick={handleClick}
					onScroll={handleScroll}
				/>
				<Details
					{...props}
					isSynced={isSynced}
					selected={selected}
					scrolled={scrolled}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default UxTab;