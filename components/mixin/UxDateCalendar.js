import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxDateCalendar = (props, ref) => {
  const originClassName = 'ux-datecalendar';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxDateCalendar);