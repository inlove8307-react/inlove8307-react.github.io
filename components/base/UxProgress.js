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
		setFill({ transform: `translateX(-${100 - value}%)` });
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
		setValue(props.value / max * 100);
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
							{}
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
									style={{ left: `${item}%` }}>
									{item}
								</div>
							))
						}
					</div>
				}
			</div>
			<button onClick={() => setValue(0)}>0</button>
			<button onClick={() => setValue(25)}>25</button>
			<button onClick={() => setValue(50)}>50</button>
			<button onClick={() => setValue(75)}>75</button>
			<button onClick={() => setValue(100)}>100</button>
		</div>
	)
};

export default UxProgress;