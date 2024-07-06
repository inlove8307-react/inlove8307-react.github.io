import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTable = (props, ref) => {
  const originClassName = 'ux-table';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTable);