import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxLink = (props, ref) => {
  const originClassName = 'ux-link';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxLink);