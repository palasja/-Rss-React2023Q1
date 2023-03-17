import React from "react";
import { Component, ReactNode } from "react";
import "./error.css";

class Error extends Component{
    render(): ReactNode {
        return <main className="main">
        <h2 className="main_error">Something goes wrong... Please open page later</h2>
    </main>
    }
}

export default Error;