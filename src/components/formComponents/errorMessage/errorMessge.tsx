import React, { Component, ReactNode } from 'react';
import './errorMessge.css';

type ErrorMessgeProp = {
  errorMessage: string;
};

class ErrorMessage extends Component<ErrorMessgeProp> {
  render(): ReactNode {
    return (
      <p className="error-message" data-testid="errorMessge">
        {this.props.errorMessage}
      </p>
    );
  }
}

export default ErrorMessage;
