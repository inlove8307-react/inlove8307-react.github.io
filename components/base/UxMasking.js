import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxMasking = (props, ref) => {
  const baseClassName = 'ux-masking';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxMasking);