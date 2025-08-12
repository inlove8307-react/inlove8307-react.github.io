"use client";

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';

/**
 * <UxPagination>
 * [props]
 *
 * [event]
 *
 */

const UxPagination = ({ ref, ...props }) => {
	const baseClassName = "ux-pagination";
	const caseClassName = classnames(baseClassName, props.className);
	const [page, setPage] = useState(props.page || 1);
	const [hasPrev, setHasPrev] = useState(false);
	const [hasNext, setHasNext] = useState(false);
	const [data, setData] = useState([]);

	const getData = () => {
		let array = [];
		let index = Math.ceil(page / props.unit) * props.unit;
		let limit = index - props.unit;

		while (limit < index) {
			index <= props.total && array.unshift(index);
			index--;
		}

		return array;
	};

	const getPrev = () => {
		return Math.ceil(page / props.unit) * props.unit - props.unit;
	};

	const getNext = () => {
		return Math.ceil(page / props.unit) * props.unit + 1;
	};

	const handlePage = (item) => {
		setPage(item);
	};

	const handlePrev = () => {
		setPage(getPrev());
	};

	const handleNext = () => {
		setPage(getNext());
	};

	const handleFirst = () => {
		setPage(1);
	}

	const handleLast = () => {
		setPage(props.total);
	}

	useEffect(() => {
		setData(getData());
		getPrev() > 0 ? setHasPrev(true) : setHasPrev(false);
		getNext() < props.total ? setHasNext(true) : setHasNext(false);
		props.onChange && props.onChange(page);
	}, [page]);

	return (
		<div className={caseClassName}>
			<div className={`${baseClassName}-base`}>
				<button
					type="button"
					className={classnames(`${baseClassName}-first`, { disabled: page === 1 })}
					onClick={handleFirst}
				>
					<UxIcon className="i071" />
				</button>
				<button
					type="button"
					className={classnames(`${baseClassName}-prev`, { disabled: !hasPrev })}
					onClick={handlePrev}
				>
					<UxIcon className="i012 w20" />
				</button>
				{
					data.map((item, index) => (
						<button
							type="button"
							key={index}
							className={classnames(`${baseClassName}-page`, { selected: item === page })}
							onClick={() => handlePage(item)}
						>
							{item}
						</button>
					))
				}
				<button
					type="button"
					className={classnames(`${baseClassName}-next`, { disabled: !hasNext })}
					onClick={handleNext}
				>
					<UxIcon className="i011 w20" />
				</button>

				<button
					type="button"
					className={classnames(`${baseClassName}-last`, { disabled: page === props.total })}
					onClick={handleLast}
				>
					<UxIcon className="i070" />
				</button>
			</div>
			{props.children}
		</div>
	);
};

export default UxPagination;