import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxCardGroup = (props, ref) => {
  const baseClassName = 'ux-card-group';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxCardGroup);