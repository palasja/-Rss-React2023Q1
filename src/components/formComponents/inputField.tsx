import React from 'react';
import { Component, LegacyRef } from 'react';
import './inputField.css';

type InputProp = {
  type: string;
  labelProp: string;
  refProp: LegacyRef<HTMLInputElement>;
  errorMessage: string
};
type InputState ={
  CustomValidity: string;
}
class InputField extends Component<InputProp, InputState> {
  accept = undefined;
  constructor(props) {
    super(props);
    this.state = {CustomValidity: ""}
  }
  render() {
    return (
      <fieldset>
        <span className="new-card-error">{this.state.CustomValidity}</span>
        <label>
          {this.props.labelProp}:<input className='new-card_input' type={this.props.type} ref={this.props.refProp}></input>
        </label>
      </fieldset>
    );
  }
}

export default InputField;
