import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxPopover = (props, ref) => {
  const originClassName = 'ux-popover';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxPopover);