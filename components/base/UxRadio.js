import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import UxIcon from "@/components/base/UxIcon";

const UxRadio = (props, ref) => {
  const originClassName = "ux-radio";
  const mixinClassName = classnames(originClassName, props.className, { disabled: props.disabled });
  const [isChecked, setIsChecked] = useState(props.checked || false);

  const handleInput = (event) => {
    props.onInput && props.onInput(event);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
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
          type="radio"
          className={`${originClassName}-input`}
          name={props.name}
          value={props.value}
          checked={isChecked}
          disabled={props.disabled}
          onInput={handleInput}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <UxIcon
          className="unselected-circle"
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

export default React.forwardRef(UxRadio);