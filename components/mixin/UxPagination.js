import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxPagination = (props, ref) => {
  const originClassName = 'ux-pagination';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxPagination);