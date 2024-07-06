import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxArticle = (props, ref) => {
  const originClassName = 'ux-article';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <article className={mixinClassName}>
      {props.children}
    </article>
  )
};

export default React.forwardRef(UxArticle);