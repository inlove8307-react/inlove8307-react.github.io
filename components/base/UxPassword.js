import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
/* COMPONENT */
import UxIcon from "@/components/base/UxIcon";
import UxMasking from "@/components/base/UxMasking";

const UxPassword = (props, ref) => {
	const baseClassName = "ux-password";
	const caseClassName = classnames(baseClassName, props.className, {
		valid: props.valid === true,
		invalid: props.valid === false,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [value, setValue] = useState(props.value || '');

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleClear = (event) => {
		setValue('');
	};

  useEffect(() => {
    props.onChange && props.onChange(value);
  }, [value]);

  useEffect(() => {
    if (typeof props.value === 'string') {
      setValue(props.value);
    }
  }, [props.value]);

	return (
		<div
      ref={ref}
      className={caseClassName}
      style={props.style}
    >
			<UxMasking
        placeholder={props.placeholder}
				value={value}
        maxLength={props.maxLength}
        readonly={props.readonly}
        disabled={props.disabled}
        scrollIntoView={props.scrollIntoView}
				onChange={handleChange}
			/>
			{
				props.clear && value && !props.readonly && !props.disabled &&
				 <UxIcon
          title="initialize"
          tagName="button"
          className="clear"
          onClick={handleClear}
        />
			}
		</div>
	);
};

export default React.forwardRef(UxPassword);