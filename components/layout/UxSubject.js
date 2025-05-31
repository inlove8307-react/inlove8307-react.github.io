import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTitle = (props, ref) => {
  const originClassName = 'ux-subject';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTitle);