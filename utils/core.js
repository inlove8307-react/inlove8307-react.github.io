import React from "react";

export const sleep = (delay) => {
	new Promise((resolve) => {
		setTimeout(resolve, delay)
	});
};

export const getArray = (children) => {
	if (Array.isArray(children)) {
		return children;
	}
	else {
		return [children];
	}
};

export const mergeProps = (element, object) => {
	if (React.isValidElement(element)) {
		return React.cloneElement(element, object);
	}
};

export const getSlot = (array, slot) => {
	return array.filter(item => item?.props.slot === slot)[0];
}

export const rawDate = (date) => {
	const array = date.split('.');
	return new Date(Number(array[0]), Number(array[1]) - 1, Number(array[2]));
};

export const getRandomChar = (length = 12) => {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const digit = new Date().getTime().toString(36);
	let result = '';

	while(result.length < length - digit.length) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return result + digit;
}