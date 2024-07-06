import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxField = (props, ref) => {
  const originClassName = 'ux-field';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxField);