import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxToggleGroup = (props, ref) => {
  const originClassName = 'ux-togglegroup';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxToggleGroup);