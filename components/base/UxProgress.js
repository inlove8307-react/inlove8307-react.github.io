"use client";

import React, { useState, useRef, useEffect, use } from 'react';
import { getArray, getRole } from '@/utils/core';
import classnames from 'classnames';

/**
 * <UxProgress>
 * [props]
 *
 * [event]
 *
 */

const UxProgress = ({ ref, ...props }) => {
	const baseClassName = 'ux-progress';
	const caseClassName = classnames(baseClassName, props.className);
	const [min, setMin] = useState(props.min || 0);
	const [max, setMax] = useState(props.max || 100);
	const [value, setValue] = useState(props.value || 0);
	const [fill, setFill] = useState({});
	const [flag, setFlag] = useState({});
	const [done, setDone] = useState(false);
	const [slotFlag, setSlotFlag] = useState();
	const [slotLegend, setSlotLegend] = useState();
	const widgetRef = useRef(null);
	const flagRef = useRef(null);

	const handleTransitionEnd = () => {
		const widgetRect = widgetRef.current.getBoundingClientRect();
		const flagRect = flagRef.current.getBoundingClientRect();

		widgetRect.x - flagRect.x > 0
			? setFlag({ transform: `translateX(${widgetRect.x - flagRect.x}px)` })
			: setFlag({});

		setDone(true);
	};

	useEffect(() => {
		setFlag({});
		setDone(false);
		setFill({ transform: `translateX(-${100 - (value - min) / (max - min) * 100}%)` });
	}, [value]);

	useEffect(() => {
		setMin(props.min);
	}, [props.min]);

	useEffect(() => {
		setMax(props.max);
	}, [props.max]);

	useEffect(() => {
		setValue(props.value);
	}, [props.value]);

	useEffect(() => {
		setSlotFlag(getRole(getArray(props.children), 'flag')?.props.children);
		setSlotLegend(getRole(getArray(props.children), 'legend')?.props.children);
		setTimeout(handleTransitionEnd, 1);
	}, []);

	return (
		<div className={caseClassName}>
			<div className={`${baseClassName}-base`}>
				<div
					ref={widgetRef}
					className={`${baseClassName}-widget`}
				>
					<span
						className={classnames(`${baseClassName}-flag`, { done })}
						style={fill}
						onTransitionEnd={handleTransitionEnd}
					>
						<span
							ref={flagRef}
							style={flag}
							className={`${baseClassName}-text`}
						>
							{slotFlag ? slotFlag : value}
						</span>
					</span>
				</div>
				<div className={`${baseClassName}-track`}>
					<div className={`${baseClassName}-stack`} />
					<div className={`${baseClassName}-gauge`}>
						<div
							className={`${baseClassName}-fill`}
							style={fill}
						/>
					</div>
				</div>
				<div className={`${baseClassName}-step`}>
					{
						props.step?.map((item, index) => (
							<div
								key={index}
								className={`${baseClassName}-label`}
								style={{ left: `${(item - min) / (max - min) * 100}%` }}>
								{item}
							</div>
						))
					}
				</div>
				<div className={`${baseClassName}-range`}>
					{
						props.from &&
						<span className={`${baseClassName}-from`}>{props.from}</span>
					}
					{
						props.to &&
						<span className={`${baseClassName}-to`}>{props.to}</span>
					}
				</div>
				<div className={`${baseClassName}-legend`}>
					{slotLegend}
				</div>
			</div>
		</div>
	)
};

export default UxProgress;