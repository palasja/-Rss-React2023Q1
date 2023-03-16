import React from "react";
import { Component, ReactNode } from "react";
import Navigation from "../navigation";
import Search from "../search";
import "./header.css"
class Header extends Component {
    render(): ReactNode {
        return <header className="header">
            <h1 ><a href='/' className="header_logo">FoodShop</a></h1>
            <Navigation />
        </header>
    }
}

export default Header;