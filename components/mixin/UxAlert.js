import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxAlert = (props, ref) => {
  const originClassName = 'ux-alert';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxAlert);