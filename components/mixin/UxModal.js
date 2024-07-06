import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxModal = (props, ref) => {
  const originClassName = 'ux-modal';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxModal);