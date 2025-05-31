import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxFieldset = (props, ref) => {
  const baseClassName = 'ux-fieldset';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxFieldset);