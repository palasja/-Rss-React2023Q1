import React from 'react';
import { Component, LegacyRef } from 'react';
type CheckboxProp = {
  legendProp: string;
  values: string[];
  refArr: LegacyRef<HTMLInputElement>[];
};
class CheckboxField extends Component<CheckboxProp> {
  render() {
    return (
      <fieldset>
        <legend>{this.props.legendProp}</legend>
        {this.props.values.map((el, i) => (
          <div key={i}>
            <label>
              {el}
              <input type="checkbox" name={el} ref={this.props.refArr[i]} />
            </label>
          </div>
        ))}
      </fieldset>
    );
  }
}

export default CheckboxField;
