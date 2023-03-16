import React, { FormEvent } from "react";
import { Component } from "react";
import "./search.css";

type SearchProps = {
	onChange: (newValue: string) => void ;
 };
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
		this.props.onChange(e.currentTarget.value);
		localStorage.setItem("searchValue", e.currentTarget.value);
	}

componentDidMount(): void {
	const val = localStorage.getItem("searchValue");
	this.setState({searchValue : val === null ? '' : val});
}
  render(){
 		return <form id="search-form">
      <div className="wrapper">
        <img className="search-icon" />
        <input className="search" type="text" placeholder="Search..." value={this.state.searchValue} onChange={this.handleChange} />
      </div>  
    </form>
  }
}

export default Search;