import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxCalendar = (props, ref) => {
  const baseClassName = 'ux-calendar';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxCalendar);