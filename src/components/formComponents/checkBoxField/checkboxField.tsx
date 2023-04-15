import React from 'react';
import { UseFormRegisterReturn, FieldError, Merge } from 'react-hook-form';
import ErrorMessage from '../errorMessage/errorMessge';
type CheckboxProp = {
  legendProp: string;
  data: { value: string; choosen: boolean | undefined }[];
  refProp: UseFormRegisterReturn;
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};
const CheckboxField = (props: CheckboxProp) => {
  return (
    <fieldset data-testid={props.legendProp}>
      <legend>{props.legendProp}</legend>
      {props.data.map((el, i) => (
        <div key={i}>
          <label>
            {el.value}
            {el.choosen === true ? (
              <input type="checkbox" value={el.value} {...props.refProp} key={i} checked />
            ) : (
              <input type="checkbox" value={el.value} {...props.refProp} key={i} />
            )}
          </label>
        </div>
      ))}
      {props.error && <ErrorMessage errorMessage={props.error.message} />}
    </fieldset>
  );
};

export default CheckboxField;
