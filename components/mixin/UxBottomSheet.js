import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxBottomSheet = (props, ref) => {
  const originClassName = 'ux-bottomsheet';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxBottomSheet);