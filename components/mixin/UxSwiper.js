import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxSwiper = (props, ref) => {
  const originClassName = 'ux-swiper';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <div className={mixinClassName}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxSwiper);