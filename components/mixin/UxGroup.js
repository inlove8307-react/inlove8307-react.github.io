import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxGroup = (props, ref) => {
  const originClassName = 'ux-group';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxGroup);