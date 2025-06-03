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
	const [fromValue, setFromValue] = useState(Number(props.from) || Number(props.min));
	const [toValue, setToValue] = useState(Number(props.to) || Number(props.max));
	const [style, setStyle] = useState({});
	const [zIndex, setZIndex] = useState({});
	const fromRef = useRef();
	const toRef = useRef();
	const sliderRef = useRef();
	const fillRef = useRef();
	const thumbSize = 24;

	const setFrom = (from, to) => {
		const [fromValue, toValue] = [Number(from.value), Number(to.value)];

		setFill();

		fromValue > toValue
			? setFromValue(toValue)
			: setFromValue(fromValue);
	};

	const setTo = (from, to) => {
		const [fromValue, toValue] = [Number(from.value), Number(to.value)];

		setFill();
		setToggle(to);

		fromValue <= toValue
			? setToValue(toValue)
			: setToValue(fromValue);
	};

	const setFill = () => {
		const distance = sliderRef.current.offsetWidth;
		const thumb = thumbSize / distance * 100;
		const left = fromValue / props.max * (100 - thumb);
		const width = toValue / props.max * (100 - thumb) - left;

		setStyle({ left, width });
	};

	const setToggle = (to) => {
		Number(to.value) <= 0
			? setZIndex(2)
			: setZIndex(0);
	};

	const handlerInput = (role) => {
		switch (role) {
			case 'from':
				return setFrom(fromRef.current, toRef.current);
			case 'to':
				return setTo(fromRef.current, toRef.current);
		}
	};

	useEffect(() => {
		props.onChange && props.onChange(fromValue, toValue);
	}, [fromValue, toValue]);

	useEffect(() => {
		if (fromRef.current && toRef.current) {
			setFill();
			setToggle(toRef.current);
		}
	}, []);

	return (
		<div
			ref={sliderRef}
			className={caseClassName}
		>
			<div className={`${baseClassName}-base`}>
				<label>
					<input
						id="fromSlider"
						ref={fromRef}
						type="range"
						className={`${baseClassName}-input from`}
						value={fromValue}
						step={props.step}
						min={props.min}
						max={props.max}
						onInput={() => handlerInput('from')}
					/>
				</label>
				<label>
					<input
						id="toSlider"
						ref={toRef}
						type="range"
						className={`${baseClassName}-input to`}
						style={{ zIndex }}
						value={toValue}
						step={props.step}
						min={props.min}
						max={props.max}
						onInput={() => handlerInput('to')}
					/>
				</label>
			</div>
			<div className={`${baseClassName}-rail`}>
				<span
					className={`${baseClassName}-min`}
					style={{ left: `${style.left}%` }}
				/>
				<span
					className={`${baseClassName}-max`}
					style={{ left: `${style.left + style.width}%` }}
				/>
				<span
					ref={fillRef}
					className={`${baseClassName}-fill`}
					style={{
						left: `${style.left}%`,
						width: `${style.width}%`,
					}}
				/>
			</div>
		</div>
	)
};

export default React.forwardRef(UxSlier);