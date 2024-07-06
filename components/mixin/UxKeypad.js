import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxKeypad = (props, ref) => {
  const originClassName = 'ux-keypad';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxKeypad);