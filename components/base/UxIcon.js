import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { mergeProps } from "@/utils/core";

const UxIcon = (props, ref) => {
  const originClassName = "ux-icon";
  const mixinClassName = classnames(originClassName, props.className);

  const Component = (props) => {
    const TagName = props.tagName || "i";
    const element = (
      <TagName
        className={mixinClassName}
        style={{
          width: props.size,
          height: props.size,
          backgroundColor: props.color
        }}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
    const buttonProps = {
      type: props.type || "button",
      title: props.title,
    };
    const anchorProps = {
      href: props.href || "#",
      title: props.title,
      target: props.target,
    };

    switch(props.tagName){
      case "button":
        return mergeProps(element, buttonProps);
      case "a":
        return mergeProps(element, anchorProps);
      default:
        return element;
    };
  };

  const handleClick = (event) => {
    event && event.stopPropagation();
    event && event.preventDefault();
    props.onClick && props.onClick(event);
  };

  const handleFocus = (event) => {
    props.onFocus && props.onFocus(event);
  };

  const handleBlur = (event) => {
    props.onBlur && props.onBlur(event);
  };

  return <Component {...props} />;
};

export default React.forwardRef(UxIcon);