import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxIcon = (props, ref) => {
  const originClassName = 'ux-icon';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxIcon);