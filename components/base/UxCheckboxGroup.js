import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxCheckboxGroup = (props, ref) => {
  const originClassName = "ux-checkbox-group";
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  );
};

export default React.forwardRef(UxCheckboxGroup);