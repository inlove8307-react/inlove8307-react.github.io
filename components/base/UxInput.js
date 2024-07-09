import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import UxIcon from "@/components/base/UxIcon";
import UxButton from "@/components/base/UxButton";

const UxInput = (props, ref) => {
  const originClassName = 'ux-input';
  const mixinClassName = classnames(originClassName, props.className, {
		valid: props.valid,
		invalid: props.invalid,
		readonly: props.readonly,
		disabled: props.disabled
	});
  const [value, setValue] = useState(props.value || '');

  const handleInput = (event) => {
    props.onInput && props.onInput(event);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event);
  };

  const handleFocus = (event) => {
    props.onFocus && props.onFocus(event);
  };

  const handleBlur = (event) => {
    props.onBlur && props.onBlur(event);
  };

  const handleKeyDown = (event) => {
    props.onKeyDown && props.onKeyDown(event);
  };

  const handleKeyUp = (event) => {
    props.onKeyUp && props.onKeyUp(event);
  };

  const handleClear = (event) => {
    setValue('');
    props.onClear && props.onClear(event);
  };

  const handleClick = (event) => {
    props.onClick && props.onClick(event);
  }

  useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value]);

  return (
    <div
      className={mixinClassName}
      style={
        props.size &&
        {flexBasis: `${props.size}rem`}
      }
    >
      {
        props.prefix &&
				<span className={`${originClassName}-prefix`}>
          {props.prefix}
        </span>
      }
      <input
        ref={ref}
        type={props.type || "text"}
        className={`${originClassName}-base`}
        value={value}
        placeholder={props.placeholder}
        readOnly={props.readonly}
        disabled={props.disabled}
        onInput={handleInput}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      {
        props.isClear && value && !props.readonly && !props.disabled &&
        <UxIcon
          tagName="button"
          className="clear"
          onClick={handleClear}
        />
      }
      {
        props.suffix &&
        <span className={`${originClassName}-suffix`}>
          {props.suffix}
        </span>
      }
      {
				props.timer &&
				<span className={`${originClassName}-timer`}>
          {props.timer}
        </span>
			}
      {
        props.submit &&
        <UxButton label={props.submit} />
      }
    </div>
  )
};

export default React.forwardRef(UxInput);