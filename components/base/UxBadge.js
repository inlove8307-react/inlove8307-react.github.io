import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxBadge = (props, ref) => {
  const originClassName = 'ux-badge';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxBadge);