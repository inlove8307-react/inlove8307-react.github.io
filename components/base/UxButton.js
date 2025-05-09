import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxButton = (props, ref) => {
  const originClassName = "ux-button";
  const mixinClassName = classnames(originClassName, props.className);
  const iconAlign = props.icon?.props.align || "left";

  const handleClick = (event) => {
    props.onClick && props.onClick(event);
  };

  const handleFocus = (event) => {
    props.onFocus && props.onFocus(event);
  }

  const handleBlur = (event) => {
    props.onBlur && props.onBlur(event);
  }

  return (
    <button
      type="button"
      className={mixinClassName}
      disabled={props.disabled}
      title={props.title}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {
        props.icon && iconAlign === "left" &&
        props.icon
      }
      {
        props.children &&
        props.children
      }
      {
        !props.children && props.label &&
        <span className={`${originClassName}-label`}>
          {props.label}
        </span>
      }
      {
        props.icon && iconAlign === "right" &&
        props.icon
      }
    </button>
  )
};

export default React.forwardRef(UxButton);