import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxImage = (props, ref) => {
  const originClassName = 'ux-image';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxImage);