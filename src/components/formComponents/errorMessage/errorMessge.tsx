import React, { Component, ReactNode } from 'react';
import './errorMessge.css';

type ErrorMessgeProp = {
  errorMessage: string | undefined;
};

const ErrorMessage = (props:  ErrorMessgeProp) =>  {
    return (
      <p className="error-message" data-testid="errorMessge">
        {props.errorMessage}
      </p>
    );
}

export default ErrorMessage;
