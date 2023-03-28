import React from 'react';
import { Component, LegacyRef } from 'react';
import ErrorMessage from '../errorMessage/errorMessge';
import './inputField.css';

type InputProp = {
  type: string;
  labelProp: string;
  refProp: LegacyRef<HTMLInputElement>;
  errorMessagee: string;
};
class InputField extends Component<InputProp> {
  accept = undefined;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <label>
          {this.props.labelProp}:
          <input
            className="new-card_input"
            type={this.props.type}
            ref={this.props.refProp}
          />
        </label>
        <ErrorMessage errorMessage={this.props.errorMessagee} />
      </fieldset>
    );
  }
}

export default InputField;
