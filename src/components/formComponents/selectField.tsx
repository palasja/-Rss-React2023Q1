import React from 'react';
import { Component, LegacyRef } from 'react';
type InputProp = {
  labelProp: string;
  refProp: LegacyRef<HTMLSelectElement>;
  values: string[];
};
class SelectField extends Component<InputProp> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <label>
          {this.props.labelProp}:
          <select ref={this.props.refProp} onChange={({ target: { value } }) => console.log(value)}>
            {this.props.values.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
    );
  }
}

export default SelectField;
