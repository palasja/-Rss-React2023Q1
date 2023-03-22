import React from 'react';
import { Component, LegacyRef } from 'react';
type InputProp = {
  type: string;
  labelProp: string;
  refProp: LegacyRef<HTMLInputElement>;
};
class InputField extends Component<InputProp> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <span className="new-card-error"></span>
        <label>
          {this.props.labelProp}:<input type={this.props.type} ref={this.props.refProp}></input>
        </label>
      </fieldset>
    );
  }
}

export default InputField;
