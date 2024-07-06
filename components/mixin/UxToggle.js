import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxToggle = (props, ref) => {
  const originClassName = 'ux-toggle';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxToggle);