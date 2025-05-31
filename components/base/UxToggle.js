import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxToggle = (props, ref) => {
  const baseClassName = 'ux-toggle';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxToggle);