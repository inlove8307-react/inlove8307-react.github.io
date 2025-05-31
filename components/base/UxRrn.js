import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxIcon from '@/components/base/UxIcon';
import UxButton from '@/components/base/UxButton';
import UxInput from '@/components/base/UxInput';
import UxPassword from '@/components/base/UxPassword';

/**
 * <UxRrn> (주민등록번호)
 * [props]
 *
 * [event]
 *
 */

const UxRrn = (props, ref) => {
  const baseClassName = 'ux-input-group';
  const caseClassName = classnames(baseClassName, props.className, {
    valid: props.valid === true,
    invalid: props.valid === false,
    readonly: props.readonly,
    disabled: props.disabled
  });
  const [value1, setValue1] = useState(props.value1 || '');
  const [value2, setValue2] = useState(props.value2 || '');
  const [value3, setValue3] = useState(props.value3 || '');

  const handleClear = (event) => {
    setValue1('');
    setValue2('');
    setValue3('');
    props.onClear && props.onClear(event);
  };

  const handleSubmit = (event) => {
    props.onSubmit && props.onSubmit(event);
  }

  useEffect(() => {
    props.onChange && props.onChange(value1, value2, value3);
  }, [value1, value2, value3]);

  useEffect(() => {
    if (props.value === 'string') {
      setValue1(props.value1);
      setValue2(props.value2);
      setValue3(props.value3);
    }
  }, [props.value1, props.value2, props.value3]);

  return (
    <div
      ref={ref}
      className={caseClassName}
      style={props.style}
    >
      <UxInput
        style={{ width: '5.2rem'}}
        placeholder="000000"
        value={value1}
        maxLength={6}
        readonly={props.readonly}
        disabled={props.disabled}
        onChange={(value) => setValue1(value)}
      />
      <UxPassword
        className="dash last"
        placeholder="0000000"
        value={value2}
        maxLength={7}
        readonly={props.readonly}
        disabled={props.disabled}
        onChange={(value) => setValue2(value)}
      />
      {
        props.clear && (value1 || value2) && !props.readonly && !props.disabled &&
        <UxIcon
          title="initialize"
          tagName="button"
          className="clear"
          onClick={handleClear}
        />
      }
      {
        props.submit && !props.readonly && !props.disabled &&
        <UxButton
          className="submit"
          onClick={handleSubmit}
        >
          {props.submit}
        </UxButton>
      }
    </div>
  )
};

export default React.forwardRef(UxRrn);