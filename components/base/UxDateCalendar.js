import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxDateCalendar = (props, ref) => {
  const baseClassName = 'ux-datecalendar';
  const caseClassName = classnames(baseClassName, props.className);

  return (
    <div className={caseClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxDateCalendar);