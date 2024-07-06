import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxDropdown = (props, ref) => {
  const originClassName = 'ux-dropdown';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxDropdown);