import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxCollapse = (props, ref) => {
  const originClassName = 'ux-collapse';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxCollapse);