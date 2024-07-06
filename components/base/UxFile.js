import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxFile = (props, ref) => {
  const originClassName = 'ux-file';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxFile);