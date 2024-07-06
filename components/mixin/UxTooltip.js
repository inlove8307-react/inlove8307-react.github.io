import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTooltip = (props, ref) => {
  const originClassName = 'ux-tooltip';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTooltip);