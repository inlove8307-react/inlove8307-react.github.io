import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { mergeProps } from "@/utils/core";

const UxIcon = (props, ref) => {
  const originClassName = 'ux-icon';
  const mixinClassName = classnames(originClassName, props.className);

  const Component = (props) => {
    const TagName = props.tagName || 'i';
    const element = (
      <TagName
        className={mixinClassName}
        style={{
          width: props.size,
          height: props.size,
          backgroundColor: props.color
        }}
      />
    );
    const buttonProps = {
      type: props.type || 'button',
      title: props.title,
      onClick: handleClick,
      onFocus: handleFocus,
      onBlur: handleBlur
    };

    switch(props.tagName){
      case 'button': return mergeProps(element, buttonProps);
      default: return element;
    }
  };

  const handleClick = (event) => {
    event && event.stopPropagation();
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