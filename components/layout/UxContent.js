import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxContent = (props, ref) => {
  const originClassName = 'ux-content';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxContent);