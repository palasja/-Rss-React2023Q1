import React from "react";
import { Component, ReactNode } from "react";
import Navigation from "../navigation";
import Search from "../search";
import "./header.css"
class Header extends Component {
    render(): ReactNode {
        return <header>
            <Navigation />
            <Search />
        </header>
    }
}

export default Header;