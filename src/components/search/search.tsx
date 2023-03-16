import React, { FormEvent } from "react";
import { Component } from "react";
import "./search.css";

type SearchProps = { };
  type SearchState = {
  searchValue: string ;
  };
  
class Search extends Component<SearchProps, SearchState>{
	constructor(props){
	  super(props);
	  this.state = {searchValue: ''}
	}
	handleChange = (e: FormEvent<HTMLInputElement>):void => {
		this.setState({searchValue: e.currentTarget.value});
		localStorage.setItem("searchValue", e.currentTarget.value);
	}

componentDidMount(): void {
	const val = localStorage.getItem("searchValue");
	this.setState({searchValue : val === null ? '' : val});
}
  render(){
    return <div>
      <input type="text" placeholder="Search..." value={this.state.searchValue} onChange={this.handleChange}></input>
    </div>;
  }
}

export default Search;