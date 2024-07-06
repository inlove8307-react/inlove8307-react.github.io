import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxSwitch = (props, ref) => {
  const originClassName = 'ux-switch';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxSwitch);