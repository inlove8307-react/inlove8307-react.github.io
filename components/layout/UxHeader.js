import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import Link from 'next/link'
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxHeader = (props, ref) => {
  const originClassName = 'ux-header';
  const mixinClassName = classnames(originClassName, props.className);

  return (
    <header className={mixinClassName}>
      <UxSection>
        <UxArticle>
          <UxContent>
            <Link href="/">Sample</Link>
            <Link href="/view/Icon">ICON</Link>
          </UxContent>
        </UxArticle>
      </UxSection>
    </header>
  )
};

export default React.forwardRef(UxHeader);