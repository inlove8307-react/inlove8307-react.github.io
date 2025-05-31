import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxPassword = (props, ref) => {
  const baseClassName = 'ux-password';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxPassword);