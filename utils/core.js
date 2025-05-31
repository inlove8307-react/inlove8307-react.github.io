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

export const getRole = (array, role) => {
  return array.filter(item => item.props["data-role"] === role)[0];
}

export const getRandomChar = (length = 12) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const digit = new Date().getTime().toString(36);
  let result = '';

  while(result.length < length - digit.length) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result + digit;
}