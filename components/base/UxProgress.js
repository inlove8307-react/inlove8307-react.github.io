"use client";

import React, { useState, useRef, useEffect } from 'react';
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
	const [percent, setPercent] = useState(0);
	const [step, setStep] = useState(props.step || []);
	const [fill, setFill] = useState({});
	const [done, setDone] = useState(false);
	const [reverse, setReverse] = useState(false);
	const widgetRef = useRef();
	const flagRef = useRef();

	const handleTransitionEnd = () => {
		const widgetRect = widgetRef.current.getBoundingClientRect();
		const flagRect = flagRef.current.getBoundingClientRect();

		widgetRect.x > flagRect.x
			? setReverse(true)
			: setReverse(false);

		setDone(true);
	};

	useEffect(() => {
		setDone(false);
	}, [fill]);

	useEffect(() => {
		setReverse(false);
		setFill({ transform: `translateX(-${100 - percent}%)` });
	}, [value]);

	useEffect(() => {
		setMin(props.min);
	}, [props.min]);

	useEffect(() => {
		setMax(props.max);
	}, [props.max]);

	useEffect(() => {
		setStep(props.step);
	}, [props.step]);

	useEffect(() => {
		setPercent(props.value / max * 100);
		setValue(props.value);
	}, [props.value]);

	return (
		<div className={caseClassName}>
			<div className={`${baseClassName}-base`}>
				<div
					ref={widgetRef}
					className={`${baseClassName}-widget`}
				>
					<span
						className={classnames(`${baseClassName}-flag`, { done, reverse })}
						style={fill}
						onTransitionEnd={handleTransitionEnd}
					>
						<span
							ref={flagRef}
							className={`${baseClassName}-text`}
						>
							{value}
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
				{
					step &&
					<div className={`${baseClassName}-step`}>
						{
							step.map((item, index) => (
								<div
									key={index}
									className={`${baseClassName}-label`}
									style={{ left: `${item / max * 100}%` }}>
									{item}
								</div>
							))
						}
					</div>
				}
			</div>
		</div>
	)
};

export default UxProgress;