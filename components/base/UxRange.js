import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxRange = (props, ref) => {
  const originClassName = 'ux-range';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxRange);