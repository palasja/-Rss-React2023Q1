import React, { Component, ReactNode } from "react"

type ErrorMessgeProp = {
  errorMessage: string
}
class ErrorMessage extends Component<ErrorMessgeProp >{
  render(): ReactNode {
    return <span>{this.props.errorMessage}</span>
  }
}

export default ErrorMessage;