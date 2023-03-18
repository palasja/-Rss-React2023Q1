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

  filterItems():Item[]{
    return ( this.state.searchValue === null || this.state.searchValue.length === 0) ? 
    items 
  : 
    items.filter(item => new RegExp(this.state.searchValue, "i").test(item.name))
  ;
  }
  render(): ReactNode {
    return <main className="main">
      <div className="main_search"><Search onChange={this.onChange} curSearchValue={this.state.searchValue} /></div>
      <div className="main_cards">
      {
        this.filterItems().map((item:Item): ReactNode => <Card key={item.id} item={item} />)
      }
      </div>
    </main>
  }
}

export default Home;