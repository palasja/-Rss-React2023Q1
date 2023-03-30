import React from 'react';
import { Component } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import ErrorMessage from '../errorMessage/errorMessge';
import './inputField.css';
type InputProp = {
  type: string;
  labelProp: string;
  refProp: UseFormRegisterReturn;
  error: FieldError | undefined;
};

const InputField = (props: InputProp) => {
    return (
      <fieldset>
        <label>
          {props.labelProp}:
          <input
            className="new-card_input"
            type={props.type}
            {...props.refProp}
            data-testid={props.labelProp}
          />
        </label>
        { props.error && <ErrorMessage errorMessage={props.error.message} />}
      </fieldset>
    );
}

export default InputField;
