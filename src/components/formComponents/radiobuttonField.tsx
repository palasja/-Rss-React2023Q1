import React, { ReactNode } from 'react';
import { Component, LegacyRef } from 'react';
import ErrorMessage from './errorMessge';
type RadioButtonProp = {
  legendProp: string;
  values: string[];
  refArr: LegacyRef<HTMLInputElement>[];
  errorMessagee: string;
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
        <ErrorMessage errorMessage={this.props.errorMessagee}/>
      </fieldset>
    );
  }
}

export default RadioButtonField;
