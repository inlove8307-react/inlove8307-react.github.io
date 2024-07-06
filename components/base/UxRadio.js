import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxRadio = (props, ref) => {
  const originClassName = 'ux-radio';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxRadio);