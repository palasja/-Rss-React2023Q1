import React, { ReactNode } from 'react';
import { Component, LegacyRef } from 'react';
import ErrorMessage from './errorMessge';
type InputProp = {
  labelProp: string;
  refProp: LegacyRef<HTMLSelectElement>;
  values: string[];
  defaultValue: string;
  errorMessagee: string;
};
class SelectField extends Component<InputProp> {
  constructor(props) {
    super(props);
    this.state = {CustomValidity: ""};
  }
  render() {
    return (
      <fieldset>
        <label>
          {this.props.labelProp}:
          <select ref={this.props.refProp} onChange={({ target: { value } }) => console.log(value)}>
            <option defaultValue={this.props.defaultValue}>{this.props.defaultValue}</option>
            {this.props.values.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>
        <ErrorMessage errorMessage={this.props.errorMessagee}/>
      </fieldset>
    );
  }
}

export default SelectField;
