import React from "react";
import { Component, ReactNode } from "react";
import "./about.css";

class About extends Component{
    render(): ReactNode {
        return <main className="main">
            <h2 className="main_name">Food Shop</h2>
            <p className="main_develoder">Yakubenka Ivan</p>
            <a href="mailto: palasja@gmail.com" className="main_email">palasja@gmail.com</a>

        </main>
    }
}

export default About;