import React, { Component, LegacyRef, ReactNode } from 'react';
import { UseFormRegisterReturn, FieldError, Merge } from 'react-hook-form';
import ErrorMessage from '../errorMessage/errorMessge';
type CheckboxProp = {
  legendProp: string;
  values: string[];
  refProp: UseFormRegisterReturn;
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined
};
const CheckboxField = (props: CheckboxProp) => {
    return (
      <fieldset data-testid={props.legendProp}>
        <legend>{props.legendProp}</legend>
        {props.values.map((el, i) => (
          <div key={i}>
            <label>
              {el}
              <input type="checkbox" value={el} {...props.refProp} key={i}/>
            </label>
          </div>
        ))}
        { props.error && <ErrorMessage errorMessage={props.error.message} />}
      </fieldset>
    );
}

export default CheckboxField;
