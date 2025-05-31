import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxThumb = (props, ref) => {
  const baseClassName = 'ux-thumb';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxThumb);