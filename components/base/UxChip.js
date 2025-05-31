import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxChip = (props, ref) => {
  const baseClassName = 'ux-chip';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxChip);