import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxSelect = (props, ref) => {
  const originClassName = 'ux-select';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxSelect);