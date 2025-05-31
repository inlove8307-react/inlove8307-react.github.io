import React, { useState, useEffect } from "react";
import { getArray, mergeProps, getRandomChar } from "@/utils/core";
import classnames from "classnames";

const UxRadioGroup = (props, ref) => {
  const baseClassName = "ux-radio-group";
  const caseClassName = classnames(baseClassName, props.className);
  const [selected, setSelected] = useState(props.selected || null);

  const handleChange = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    props.onChange && props.onChange(selected);
  }, [selected]);

  useEffect(() => {
    if (typeof props.selected === "string") {
      setSelected(props.selected);
    }
  }, [props.selected]);

  return (
    <div
      ref={ref}
      className={caseClassName}
    >
      {
        getArray(props.children).map((item, index) => mergeProps(item, {
          key: index,
          index,
          selected,
          randomChar: getRandomChar(),
          onChange: handleChange
        }))
      }
    </div>
  );
};

export default React.forwardRef(UxRadioGroup);