import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxText = (props, ref) => {
  const originClassName = 'ux-text';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxText);