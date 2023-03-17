import React, { FormEvent } from "react";
import { Component } from "react";
import "./search.css";

type SearchProps = {
	onChange: (newValue: string) => void ;
	curSearchValue: string;
 };
type SearchState = {
  searchValue: string ;
};
  
class Search extends Component<SearchProps, SearchState>{
	constructor(props){
	  super(props);
	  this.state = {searchValue: this.props.curSearchValue}
	}

	componentWillUnmount(): void {
		localStorage.setItem("searchValue", this.state.searchValue);
	}

	handleChange = (e: FormEvent<HTMLInputElement>):void => {
		this.setState({searchValue: e.currentTarget.value});
		this.props.onChange(e.currentTarget.value);
	}

  render(){
 		return <div className="wrapper">
        <img className="search-icon" />
        <input className="search" type="text" placeholder="Search..." value={this.state.searchValue} onChange={this.handleChange} />
      </div>  
  }
}

export default Search;