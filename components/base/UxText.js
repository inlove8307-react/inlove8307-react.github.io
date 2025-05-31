import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxText = (props, ref) => {
  const baseClassName = 'ux-text';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxText);