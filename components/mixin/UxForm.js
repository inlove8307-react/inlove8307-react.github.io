import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxForm = (props, ref) => {
  const originClassName = 'ux-form';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxForm);