import React, { ReactNode } from 'react';
import { Component, LegacyRef } from 'react';
type RadioButtonProp = {
  legendProp: string;
  values: string[];
  refArr: LegacyRef<HTMLInputElement>[];
  error: ReactNode;
};
class RadioButtonField extends Component<RadioButtonProp> {
  render() {
    return (
      <fieldset>
        <legend>{this.props.legendProp}</legend>
        {this.props.values.map((el, i) => (
          <div key={i}>
            <label>
              {el}
              <input type="radio" name="radioBtn" value={el} ref={this.props.refArr[i]} />
            </label>
          </div>
        ))}
        {this.props.error}
      </fieldset>
    );
  }
}

export default RadioButtonField;
