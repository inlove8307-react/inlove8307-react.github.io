import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
/**
 * <UxSlider>
 * [props]
 * min(Number)
 * max(Number)
 * step(Number)
 *
 * [event]
 * onChange(Func)
*/
const UxSlier = (props, ref) => {
	const baseClassName = 'ux-slider';
	const caseClassName = classnames(baseClassName, props.className);
	const [minValue, setMinValue] = useState(props.min);
	const [maxValue, setMaxValue] = useState(props.max);
	const [average, setAverage] = useState((props.min + props.max) / 2);
	const sliderRef = useRef();
	const minRef = useRef();
	const maxRef = useRef();
	const thumbSize = 14;

	const draw = () => {
		var min = minRef.current;
		var max = maxRef.current;
		var width = sliderRef.current.offsetWidth;

		min.style.width = parseInt(thumbSize + ((average - props.min) / (props.max - props.min)) * (width - (2 * thumbSize))) + 'px';
		max.style.width = parseInt(thumbSize + ((props.max - average) / (props.max - props.min)) * (width - (2 * thumbSize))) + 'px';
		min.style.left = '0px';
		max.style.left = parseInt(min.style.width)+'px';

		if (max.value > props.max - 1) setMaxValue(props.max);
	}

	const handleInput = () => {
		setMinValue(Math.floor(minRef.current.value));
		setMaxValue(Math.floor(maxRef.current.value));
		setAverage((Math.floor(minRef.current.value) + Math.floor(maxRef.current.value)) / 2);
	};

	useEffect(() => {
		draw();
	}, [minValue, maxValue, average]);

	useEffect(() => {
		draw();
	}, []);

	return (
		<div
			ref={sliderRef}
			className={caseClassName}
		>
			<label
				className={`${baseClassName}-label min`}
			>
				<input
					ref={minRef}
					type="range"
					className={`${baseClassName}-input min`}
					value={minValue}
					step={props.step}
					min={props.min}
					max={average}
					onInput={handleInput}
				/>
			</label>
			<label
				className={`${baseClassName}-label max`}
			>
				<input
					ref={maxRef}
					type="range"
					className={`${baseClassName}-input max`}
					value={maxValue}
					step={props.step}
					min={average}
					max={props.max}
					onInput={handleInput}
				/>
			</label>
		</div>
	)
};

export default React.forwardRef(UxSlier);