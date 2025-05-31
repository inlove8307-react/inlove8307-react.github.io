import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxInfo = (props, ref) => {
  const baseClassName = 'ux-info';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxInfo);