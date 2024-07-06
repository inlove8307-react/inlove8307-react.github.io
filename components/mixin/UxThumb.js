import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxThumb = (props, ref) => {
  const originClassName = 'ux-thumb';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxThumb);