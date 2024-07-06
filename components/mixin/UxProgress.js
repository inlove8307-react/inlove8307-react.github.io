import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxProgress = (props, ref) => {
  const originClassName = 'ux-progress';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxProgress);