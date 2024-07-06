import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTextarea = (props, ref) => {
  const originClassName = 'ux-textarea';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTextarea);