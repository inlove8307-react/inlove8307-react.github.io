import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxMasking = (props, ref) => {
  const originClassName = 'ux-masking';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxMasking);