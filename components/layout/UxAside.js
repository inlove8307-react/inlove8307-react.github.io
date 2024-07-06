import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxAside = (props, ref) => {
  const originClassName = 'ux-aside';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <aside className={mixinClassName}>
      <UxSection>
        <UxArticle>
          <UxContent>

          </UxContent>
        </UxArticle>
      </UxSection>
    </aside>
  )
};

export default React.forwardRef(UxAside);