import React, { BaseSyntheticEvent, FormEvent, ReactNode, SyntheticEvent } from 'react';
import { Component, LegacyRef } from 'react';
import './inputField.css';

type InputProp = {
  type: string;
  labelProp: string;
  error: ReactNode;
  refProp: LegacyRef<HTMLInputElement>;
  // errorMessageCustomError?: string | undefined;
  // errorMessagePattern?: string | undefined;
  // errorMessageMax?: string | undefined;
  // errorMessageMin?: string | undefined;
  // errorMessageMaxLength?: string | undefined;
  // errorMessageRequired?: string | undefined;
  // pattern?: RegExp | undefined;
  // min?: number | undefined;
  // max?: number | undefined;
  // maxLength?: number | undefined;
  // required?: boolean | undefined;
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

  // checkError(e: BaseSyntheticEvent){
  //   // let {errorMessageCustomError, errorMessagePattern, errorMessageMax, errorMessageMin, errorMessageMaxLength, errorMessageRequired} = this.props
  //   if(e.currentTarget.CustomValidity){
  //     this.setState({CustomValidity: errorMessageCustomError ? errorMessageCustomError : "errorMessageCustomError is missing"});
  //   }
  // }
  render() {
    return (
      <fieldset>
        <label>
          {this.props.labelProp}:<input className='new-card_input' type={this.props.type} min={10} ref={this.props.refProp} />
        </label>
        {this.props.error}
        {/* <span className="new-card-error">{this.state.CustomValidity}</span> */}
      </fieldset>
    );
  }
}

export default InputField;
