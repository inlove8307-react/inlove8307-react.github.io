import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxButton = (props, ref) => {
  const originClassName = 'ux-button';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxButton);