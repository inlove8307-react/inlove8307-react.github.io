import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTextList = (props, ref) => {
  const originClassName = 'ux-textlist';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTextList);