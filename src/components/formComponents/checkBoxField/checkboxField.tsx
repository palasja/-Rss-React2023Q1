import React, { Component, LegacyRef, ReactNode } from 'react';
import ErrorMessage from '../errorMessage/errorMessge';
type CheckboxProp = {
  legendProp: string;
  values: string[];
  refArr: LegacyRef<HTMLInputElement>[];
  errorMessagee: string;
};
class CheckboxField extends Component<CheckboxProp> {
  render(): ReactNode {
    return (
      <fieldset data-testid={this.props.legendProp}>
        <legend>{this.props.legendProp}</legend>
        {this.props.values.map((el, i) => (
          <div key={i}>
            <label>
              {el}
              <input type="checkbox" name={el} ref={this.props.refArr[i]} />
            </label>
          </div>
        ))}
        <ErrorMessage errorMessage={this.props.errorMessagee} />
      </fieldset>
    );
  }
}

export default CheckboxField;
