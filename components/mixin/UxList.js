import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxList = (props, ref) => {
  const originClassName = 'ux-list';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxList);