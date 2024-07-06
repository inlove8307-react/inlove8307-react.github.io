import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTab = (props, ref) => {
  const originClassName = 'ux-tab';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTab);