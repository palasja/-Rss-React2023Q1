import React from "react";
import { Component } from "react";
import Header from "../../components/header";
import { Tags, TypeFood } from "../../types/item";
import "./newCard.css"; 

class NewCard extends Component{
  getTags(arr){
    let tags = arr.slice(0, Object.values(Tags).length / 2);
    return tags;

  }
  render(){
    return <>
      <Header />
      <main className="main-new-card">
        {this.getTags(Object.values(Tags)).map(
          (val, i) => <p key={i}>{val} </p> 
        )}
      </main>
    </>
  }
}

export default NewCard