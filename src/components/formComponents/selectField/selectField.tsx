import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import ErrorMessage from '../errorMessage/errorMessge';
type InputProp = {
  labelProp: string;
  values: string[];
  defaultValue: string;
  refProp: UseFormRegisterReturn;
  error: FieldError | undefined;
};
const SelectField = (props: InputProp) => {
    return (
      <fieldset data-testid={props.labelProp}>
        <label>
          {props.labelProp}:
          <select {...props.refProp}>
            <option defaultValue={props.defaultValue}>{props.defaultValue}</option>
            {props.values.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>
        { props.error && <ErrorMessage errorMessage={props.error.message} />}
      </fieldset>
    );
}

export default SelectField;
