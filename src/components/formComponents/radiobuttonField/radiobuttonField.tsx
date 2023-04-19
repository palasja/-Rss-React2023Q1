import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import ErrorMessage from '../errorMessage/errorMessge';

type RadioButtonProp = {
  legendProp: string;
  data: { values: string[]; choosen: string | undefined };
  refProp: UseFormRegisterReturn;
  error: FieldError | undefined;
};

const RadioButtonField = (props: RadioButtonProp) => {
  return (
    <fieldset data-testid={props.legendProp}>
      <legend>{props.legendProp}</legend>
      {props.data.values.map((el, i) => (
        <div key={i}>
          <label>
            {el}
            <input type="radio" {...props.refProp} value={el} />
          </label>
        </div>
      ))}
      {props.error && <ErrorMessage errorMessage={props.error.message} />}
    </fieldset>
  );
};

export default RadioButtonField;
