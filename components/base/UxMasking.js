import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const UxMasking = (props, ref) => {
  const baseClassName = 'ux-masking';
  const caseClassName = classnames(baseClassName, props.className, {
    readonly: props.readonly,
    disabled: props.disabled
  });
  const [value, setValue] = useState(props.value || '');
  const [placeholder] = useState(!props.maxLength ? props.placeholder : '');

	const Masking = (props) => {
		const maxLength = props.maxLength || value.length;
    let array = [];

    while (array.length < maxLength) {
      array.length < value.length
        ? array.push(true)
        : array.push(false);
    }

		return (
			<div className={`${baseClassName}-mask`}>
				{array.map((enabled, index)=>(
					<span
						key={index}
						className={classnames(`${baseClassName}-item`, {enabled})}
					/>
				))}
			</div>
		);
	}

	const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event);
	}

  useEffect(() => {
    if (typeof props.value === 'string') {
      setValue(props.value);
    }
  }, [props.value]);

	return (
		<div
      ref={ref}
      className={caseClassName}
    >
			<Masking {...props} />
      <input
        type={props.type || "text"}
        placeholder={placeholder}
        className={`${baseClassName}-input`}
        value={value}
        maxLength={props.maxLength}
        readOnly={props.readonly}
        disabled={props.disabled}
        onChange={handleChange}
      />
		</div>
	);
};

export default React.forwardRef(UxMasking);