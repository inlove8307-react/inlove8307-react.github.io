import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxCollapse = (props, ref) => {
  const baseClassName = 'ux-collapse';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxCollapse);