import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxSpacer = (props, ref) => {
  const originClassName = 'ux-spacer';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxSpacer);