import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxMonthCalendar = (props, ref) => {
  const originClassName = 'ux-monthcalendar';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxMonthCalendar);