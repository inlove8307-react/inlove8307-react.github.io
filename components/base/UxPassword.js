import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxPassword = (props, ref) => {
  const originClassName = 'ux-password';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxPassword);