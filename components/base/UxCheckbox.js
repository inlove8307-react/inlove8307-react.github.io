import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxCheckbox = (props, ref) => {
  const originClassName = 'ux-checkbox';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxCheckbox);