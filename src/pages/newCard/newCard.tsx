import React from "react";
import { Component } from "react";
import Header from "../../components/header";
import "./newCard.css"; 

class NewCard extends Component{
  render(){
    return <>
      <Header />
      <main className="main-new-card">
        <p>Form</p>
      </main>
    </>
  }
}

export default NewCard