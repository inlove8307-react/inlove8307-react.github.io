import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxYearCalendar = (props, ref) => {
  const originClassName = 'ux-yearcalendar';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxYearCalendar);