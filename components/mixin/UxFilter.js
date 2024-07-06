import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxFilter = (props, ref) => {
  const originClassName = 'ux-filter';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxFilter);