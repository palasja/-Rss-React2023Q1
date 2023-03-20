import React from "react";
import { Component } from "react";
import "./currentRoute.css";
class CurentRoute extends Component<object, {currentRoute:string}>{
  constructor(props: object) {
    super(props);
    this.state = {
      currentRoute: '',
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    if (new RegExp(/^\/home$/, "i").test(path) || path === '/') {
      this.setState({ currentRoute: 'Home' });
    } else if (new RegExp(/^\/about$/, "i").test(path)) {
      this.setState({ currentRoute: 'About' });
    } else {
      this.setState({ currentRoute: '404' });
    }
  }

  render(){
    return <div className="current-page"><h3>{this.state.currentRoute}</h3></div>
  }
}

export default CurentRoute