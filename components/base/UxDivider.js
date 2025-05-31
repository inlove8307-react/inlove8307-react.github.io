import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxDivider = (props, ref) => {
  const baseClassName = 'ux-divider';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxDivider);