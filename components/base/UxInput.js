import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

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

  useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value]);

  return (
    <div
      className={mixinClassName}
      style={{flexBasis: `${props.size}rem`}}
    >
      {
        props.prefix &&
				<span className={`${originClassName}-prefix`}>{props.prefix}</span>
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
        <button
          type="button"
          className={`${originClassName}-clear`}
          onClick={handleClear}
        >
          clear
        </button>
      }
      {
        props.suffix &&
        <span className={`${originClassName}-suffix`}>{props.suffix}</span>
      }
      {
				props.timer &&
				<span className={`${originClassName}-timer`}>{props.timer}</span>
			}
    </div>
  )
};

export default React.forwardRef(UxInput);