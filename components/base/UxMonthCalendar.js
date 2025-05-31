import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxMonthCalendar = (props, ref) => {
  const baseClassName = 'ux-monthcalendar';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxMonthCalendar);