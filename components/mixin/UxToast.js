import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxToast = (props, ref) => {
  const originClassName = 'ux-toast';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxToast);