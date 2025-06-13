import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * <UxSlierSingle>
 * [props]
 * min(Number)
 * max(Number)
 * step(Number)
 *
 * [event]
 * onChange(Func)
 */

const UxSlierSingle = ({ ref, ...props }) => {
	const baseClassName = 'ux-slider';
	const [value, setValue] = useState(Number(props.value) || 0);
	const [style, setStyle] = useState({});
	const inputRef = useRef();

	const setFill = (input) => {
		const distance = input.max - input.min;
		const value = input.value - input.min;
		const slider = 'rgb(238, 238, 238)';
		const range = 'rgb(217, 13, 88)';

		setStyle({ background: `linear-gradient(
			to right,
			${range} 0%,
			${range} ${value / distance * 100}%,
			${slider} ${value / distance * 100}%,
			${slider} 100%)`
		});
	};

	const handlerInput = () => {
		setFill(inputRef.current);
		setValue(Number(inputRef.current.value));
	};

	useEffect(() => {
		props.onChange && props.onChange(value);
	}, [value]);

	useEffect(() => {
			setFill(inputRef.current);
	}, []);

	return (
		<div className={`${baseClassName}-base`}>
			<label className={`${baseClassName}-label`}>
				<input
					ref={inputRef}
					type="range"
					className={`${baseClassName}-input`}
					value={value}
					style={style}
					step={props.step}
					min={props.min}
					max={props.max}
					onInput={handlerInput}
				/>
			</label>
		</div>
	)
};

/**
 * <UxSlierRange>
 * [props]
 * min(Number)
 * max(Number)
 * step(Number)
 *
 * [event]
 * onChange(Func)
 */

const UxSlierRange = ({ ref, ...props }) => {
	const baseClassName = 'ux-slider';
	const [fromValue, setFromValue] = useState(Number(props.from) || Number(props.min));
	const [toValue, setToValue] = useState(Number(props.to) || Number(props.max));
	const [style, setStyle] = useState({});
	const [isToggle, setIsToggle] = useState(false);
	const fromRef = useRef();
	const toRef = useRef();

	const setFrom = (from, to) => {
		const [fromValue, toValue] = [Number(from.value), Number(to.value)];

		setFill(from, to);

		fromValue > toValue
			? setFromValue(toValue)
			: setFromValue(fromValue);
	};

	const setTo = (from, to) => {
		const [fromValue, toValue] = [Number(from.value), Number(to.value)];

		setFill(from, to);
		setToggle(to);

		fromValue <= toValue
			? setToValue(toValue)
			: setToValue(fromValue);
	};

	const setFill = (from, to) => {
		const distance = to.max - to.min;
		const fromValue = from.value - to.min;
		const toValue = to.value - to.min;
		const slider = 'rgb(238, 238, 238)';
		const range = 'rgb(217, 13, 88)';

		setStyle({ background: `linear-gradient(
			to right,
			${slider} 0%,
			${slider} ${fromValue / distance * 100}%,
			${range} ${fromValue / distance * 100}%,
			${range} ${toValue / distance * 100}%,
			${slider} ${toValue / distance * 100}%,
			${slider} 100%)`
		});
	};

	const setToggle = (to) => {
		Number(to.value) <= 0
			? setIsToggle(true)
			: setIsToggle(false);
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
		props.onChange && props.onChange({
			fromValue,
			toValue,
			isToggle,
		});
	}, [fromValue, toValue, isToggle]);

	useEffect(() => {
			setFill(fromRef.current, toRef.current);
			setToggle(toRef.current);
	}, []);

	return (
		<div className={`${baseClassName}-base`}>
			<label className={`${baseClassName}-label`}>
				<input
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
			<label className={`${baseClassName}-label`}>
				<input
					ref={toRef}
					type="range"
					className={`${baseClassName}-input to`}
					style={style}
					value={toValue}
					step={props.step}
					min={props.min}
					max={props.max}
					onInput={() => handlerInput('to')}
				/>
			</label>
		</div>
	)
};

/**
 * <UxSlider>
 * [props]
 * type(String)
 * min(Number)
 * max(Number)
 * step(Number)
 *
 * [event]
 * onChange(Func)
 */

const UxSlier = ({ ref, ...props }) => {
	const baseClassName = 'ux-slider';
	const caseClassName = classnames(baseClassName, props.className);
	const [toggle, setToggle] = useState();
	const sliderRef = useRef();

	const handleChange = (data) => {
		props.type === 'range' && setToggle(data.isToggle);
		props.onChange && props.onChange(data);
	};

	return (
		<div
			ref={sliderRef}
			className={classnames(caseClassName, {toggle})}
			onChange={handleChange}
		>
			{
				(!props.type || props.type === 'single') &&
				<UxSlierSingle
					{...props}
					onChange={handleChange}
				/>
			}
			{
				props.type === 'range' &&
				<UxSlierRange
					{...props}
					onChange={handleChange}
				/>
			}
		</div>
	)
};

export default UxSlier;