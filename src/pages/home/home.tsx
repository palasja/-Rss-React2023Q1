import React from "react";
import { Component, ReactNode } from "react";
import "./home.css";
import items from "../../assets/items/items";
import Card from "../../components/card/card";
import { Item } from "../../types";

class Home extends Component{
    
    render(): ReactNode {
        // const content =  items.map((item:Item): ReactNode => <Card item={item})
    
        return <div className="main">
            {items.map((item:Item): ReactNode => {
                return <Card item={item} key={item.id}/>;
            })}
        </div>
    }
}

export default Home;