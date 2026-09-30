'use client';

import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';

/**
 * <BaseLottie>
 * [props]
 * className(String): 클래스명 추가
 * data(Json): json 파일
 * autoplay(Boolean): 자동 재생
 * loop(Boolean): 반복 재생
 * selected(Boolean): 메뉴에서 사용시 해당 메뉴 여부
 *
 * [event]
 */

const BaseLottie = ({ ref, ...props }) => {
	const baseClassName = 'ux-lottie';
	const caseClassName = classnames(baseClassName, props.className);
	const [lottieRef, lottieInView] = useInView();
	const [instance, setInstance] = useState();
	const animationRef = useRef(null);
	const autoplay = props.options?.autoplay === undefined ? true : props.options.autoplay;
	const loop = props.options?.loop === undefined ? false : props.options.loop;
	const selected = props.selected === undefined ? true : props.selected;

	const putAnimation = async () => {
		const { default: Lottie } = await import('lottie-web');

		if (Lottie && animationRef && animationRef.current.children.length < 1) {
			setInstance(
				Lottie.loadAnimation({
					container: animationRef.current,
					animationData: props.data,
					autoplay: autoplay,
					loop: loop,
				})
			);
		}
	};

	const runInstance = (selected) => {
		if (instance) {
			if (selected) {
				instance.play();
			} else {
				instance.stop();
			}
		}
	};

	useEffect(() => {
		runInstance(selected);
	}, [instance]);

	useEffect(() => {
		runInstance(selected);
	}, [selected]);

	useEffect(() => {
		if (lottieInView) {
			putAnimation(props);
		}
	}, [lottieInView]);

	return (
		<>
			<div
				ref={ref}
				className={caseClassName}
			>
				<div
					ref={lottieRef}
					className="lottie-observer"
				/>
				<div
					ref={animationRef}
					className="lottie-container"
				/>
			</div>
		</>
	);
};

export default BaseLottie;
