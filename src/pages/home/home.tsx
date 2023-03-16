import React from "react";
import { Component, ReactNode } from "react";
import "./home.css";
import items from "../../assets/items/items";
import Card from "../../components/card/card";
import { Item } from "../../types";
import Search from "../../components/search";

type HomeProps = { };
type HomeState = {
  searchValue: string ;
};
class Home extends Component<HomeProps, HomeState>{
  constructor(props){
    super(props);
    this.state = {searchValue: localStorage.getItem("searchValue") || ""};
  }
  
  onChange = (newName:string) => this.setState({ searchValue: newName });

  render(): ReactNode {
    return <main className="main">
      <Search onChange={this.onChange}/>
      {
        (this.state.searchValue === null || this.state.searchValue.length === 0) ? 
          items.map(
            (item:Item): ReactNode => <Card item={item} key={item.id}/>
            )
        :
          items.filter(item => new RegExp(this.state.searchValue, "i").test(item.name))
            .map((item:Item): ReactNode => <Card item={item} key={item.id}/>
          ) 
      }
    </main>
  }
}

export default Home;