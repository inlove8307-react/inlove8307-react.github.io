import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxDatePicker = (props, ref) => {
  const originClassName = 'ux-datepicker';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxDatePicker);