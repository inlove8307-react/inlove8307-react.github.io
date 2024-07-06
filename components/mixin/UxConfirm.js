import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxConfirm = (props, ref) => {
  const originClassName = 'ux-confirm';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxConfirm);