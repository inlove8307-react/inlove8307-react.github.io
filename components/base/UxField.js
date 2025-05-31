import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxField = (props, ref) => {
  const baseClassName = 'ux-field';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxField);