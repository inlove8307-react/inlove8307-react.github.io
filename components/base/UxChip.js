import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxChip = (props, ref) => {
  const originClassName = 'ux-chip';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxChip);