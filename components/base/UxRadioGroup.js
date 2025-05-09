import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxRadioGroup = (props, ref) => {
  const originClassName = "ux-radio-group";
  const mixinClassName = classnames(originClassName, props.className);

  useEffect(() => {

  }, []);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  );
};

export default React.forwardRef(UxRadioGroup);