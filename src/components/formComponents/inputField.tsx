import React from 'react';
import { Component, LegacyRef } from 'react';
import ErrorMessage from './errorMessge';
import './inputField.css';

type InputProp = {
  type: string;
  labelProp: string;
  refProp: LegacyRef<HTMLInputElement>;
  errorMessagee: string;
};
type InputState = {
  CustomValidity: string;
};
class InputField extends Component<InputProp, InputState> {
  accept = undefined;
  constructor(props) {
    super(props);
    this.state = { CustomValidity: '' };
  }

  render() {
    return (
      <fieldset>
        <label>
          {this.props.labelProp}:
          <input
            className="new-card_input"
            type={this.props.type}
            min={10}
            ref={this.props.refProp}
          />
        </label>
        <ErrorMessage errorMessage={this.props.errorMessagee} />
      </fieldset>
    );
  }
}

export default InputField;
