import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxTimeline = (props, ref) => {
  const originClassName = 'ux-timeline';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTimeline);