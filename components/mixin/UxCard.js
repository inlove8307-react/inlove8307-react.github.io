import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxCard = (props, ref) => {
  const originClassName = 'ux-card';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxCard);