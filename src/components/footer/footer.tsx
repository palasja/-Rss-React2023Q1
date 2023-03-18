import React from "react";
import { Component, ReactNode } from "react";
import "./footer.css"

class Footer extends Component{
  render(): ReactNode {
  return <footer className="footer">
      <a href="https://rs.school/">
        <img src={new URL(`../../assets/logo/rs-school.svg`, import.meta.url).href} alt="Rs School logo"/>
      </a>
    <span className="footer_year">
      2023
    </span>
</footer>
  }
}

export default Footer