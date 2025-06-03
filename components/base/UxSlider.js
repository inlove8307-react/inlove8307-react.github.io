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
	const [minWidth, setMinWidth] = useState();
	const [maxWidth, setMaxWidth] = useState();
	const [style, setStyle] = useState({});
	const sliderRef = useRef();
	const minRef = useRef();
	const maxRef = useRef();
	const thumbSize = 24;

	const draw = () => {
		const width = sliderRef.current.offsetWidth;
		const percentThumb = thumbSize * 2 / width * 100;
		const percentLeft = minValue / props.max * (100 - percentThumb);
		const percentWith = maxValue / props.max * (100 - percentThumb) - percentLeft;

		setMinWidth(parseInt(thumbSize + ((average - props.min) / (props.max - props.min)) * (width - (2 * thumbSize))));
		setMaxWidth(parseInt(thumbSize + ((props.max - average) / (props.max - props.min)) * (width - (2 * thumbSize))));

		maxValue > props.max - 1 && setMaxValue(props.max);

		setStyle({
			marginLeft: `${percentLeft}%`,
			width: `${percentWith}%`
		});
	}

	const handleInput = () => {
		setMinValue(Math.floor(minRef.current.value))
		setMaxValue(Math.floor(maxRef.current.value))
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
			<div className={`${baseClassName}-base`}>
				<label className={`${baseClassName}-label min`}>
					<input
						ref={minRef}
						type="range"
						className={`${baseClassName}-input min`}
						style={{ width: `${minWidth}px` }}
						value={minValue}
						step={props.step}
						min={props.min}
						max={average}
						onInput={handleInput}
					/>
				</label>
				<label className={`${baseClassName}-label`}>
					<input
						ref={maxRef}
						type="range"
						className={`${baseClassName}-input`}
						style={{ width: `${maxWidth}px` }}
						value={maxValue}
						step={props.step}
						min={average}
						max={props.max}
						onInput={handleInput}
					/>
				</label>
			</div>
			<span className={`${baseClassName}-rail`}>
				<span
					className={`${baseClassName}-fill`}
					style={style}
				/>
			</span>
		</div>
	)
};

export default React.forwardRef(UxSlier);