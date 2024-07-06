import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxDock = (props, ref) => {
  const originClassName = 'ux-dock';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <article className={mixinClassName}>
      {props.children}
    </article>
  )
};

export default React.forwardRef(UxDock);