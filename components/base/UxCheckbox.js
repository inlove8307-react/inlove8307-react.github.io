import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import UxIcon from "@/components/base/UxIcon";

const UxCheckbox = (props, ref) => {
  const originClassName = "ux-checkbox";
  const mixinClassName = classnames(originClassName, props.className, { disabled: props.disabled });
  const [isChecked, setIsChecked] = useState(props.checked || false);

  const handleInput = (event) => {
    props.onInput && props.onInput(event);
  };

  const handleChange = (event) => {
    console.log(event);
    setIsChecked(event.target.checked);
    props.onChange && props.onChange(event);
  };

  const handleFocus = (event) => {
    props.onFocus && props.onFocus(event);
  };

  const handleBlur = (event) => {
    props.onBlur && props.onBlur(event);
  };

  const handleClick = (event) => {
    console.log(event);
    props.onBlur && props.onBlur(event);
  };

  const handleKeyDown = (event) => {
    event.keyCode === 13 && setIsChecked(!isChecked);
    props.onKeyDown && props.onKeyDown(event);
  };

  const handleKeyUp = (event) => {
    props.onKeyUp && props.onKeyUp(event);
  };

  useEffect(() => {
    props.checked && setIsChecked(props.checked);
  }, [props.checked]);

  return (
    <div className={classnames(mixinClassName, { checked: isChecked })}>
      <label
        className={`${originClassName}-base`}
        tabIndex="0"
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      >
        <input
          type="checkbox"
          className={`${originClassName}-input`}
          checked={isChecked}
          disabled={props.disabled}
          onInput={handleInput}
          onChange={handleChange}
        />
        <UxIcon
          className="unchecked-circle"
          size="2.4rem"
        />
        {
          props.label &&
          <span className={`${originClassName}-label`}>
            {props.label}
          </span>
        }
      </label>
    </div>
  );
};

export default React.forwardRef(UxCheckbox);