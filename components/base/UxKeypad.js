import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxKeypad = (props, ref) => {
  const baseClassName = 'ux-keypad';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxKeypad);