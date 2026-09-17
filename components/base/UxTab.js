"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import { getArray, getSlot, mergeProps } from '@/utils/core';
import classnames from 'classnames';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';

/**
 * <Summary>
 * [props]
 *
 * [event]
 *
 */

const Summary = ({ ref, ...props }) => {
	const baseClassName = props.baseClassName;
	const [summary, setSummary] = useState([]);
	const [beforeRef, beforeInView] = useInView();
	const [afterRef, afterInView] = useInView();
	const summaryRef = useRef([]);
	const linearRef = useRef();
	const scrollRef = useRef();

	const handleClick = (index) => {
		props.onClick && props.onClick(index);
	};

	const handleLinear = (index) => {
		linearRef.current.style.width = `${summaryRef.current[index].clientWidth}px`;
		linearRef.current.style.left = `${summaryRef.current[index].offsetLeft}px`;
	};

	const handleScroll = (index) => {
		summaryRef.current[index]?.scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const array = [];

		getArray(props.children).map((item) => {
			array.push(getSlot(getArray(item.props.children), 'summary'));
		});

		setSummary(array);
	}, []);

	useEffect(() => {
		props.onScroll && props.onScroll({
			beforeInView,
			afterInView,
		});
	}, [beforeInView, afterInView]);

	useEffect(() => {
		if (props.isSynced) return;
		props.isLinear && handleLinear(props.selected);
		props.isScroll && props.isActive && handleScroll(props.selected);
	}, [props.selected]);

	useEffect(() => {
		props.isActive &&	handleScroll(props.selectedSynced);
	}, [props.selectedSynced]);

	return (
		<div
			ref={scrollRef}
			className={`${baseClassName}-summary`}
		>
			<div className={`${baseClassName}-list`}>
				<span
					ref={beforeRef}
					className={`${baseClassName}-before`}
				/>
				{summary.map((item, index) => {
					let active = props.selected === index;

					if (props.isSynced) {
						active = props.selectedSynced === index;
					}

					return (
						<UxButton
							ref={(element) => summaryRef.current[index] = element}
							key={index}
							className={active && 'active'}
							onClick={() => handleClick(index)}
						>
							{item.props.children}
						</UxButton>
					)}
				)}
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
	const baseClassName = props.baseClassName;
	const [state, setState] = useState([]);
	const detailsRef = useRef([]);

	const handleScroll = (index) => {
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
				props.onSynced && props.onSynced(index);
			}
		});
	}, [state]);

	useEffect(() => {
		props.isActive && handleScroll(props.selected);
	}, [props.selected]);

	return (
		<div className={`${baseClassName}-details`}>
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
		</div>
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
	const [selectedSynced, setSelectedSynced] = useState(0);
	const [isLinear, setIsLinear] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const [isSynced, setIsSynced] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [beforeInView, setBeforeInView] = useState();
	const [afterInView, setAfterInView] = useState();

	const handleClick = (index) => {
		setIsActive(true);
		setSelected(index);
		props.onChange && props.onChange(index);
	};

	const handleSynced = (index) => {
		setIsActive(true);
		setSelectedSynced(index);
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
					selected={selected}
					selectedSynced={selectedSynced}
					isLinear={isLinear}
					isScroll={isScroll}
					isSynced={isSynced}
					isActive={isActive}
					onClick={handleClick}
					onScroll={handleScroll}
				/>
				<Details
					{...props}
					baseClassName={baseClassName}
					selected={selected}
					isSynced={isSynced}
					isActive={isActive}
					onSynced={handleSynced}
				/>
			</div>
		</div>
	);
};

export default UxTab;