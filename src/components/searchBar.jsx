import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    inputText: "",
    placeholder: "Hello"
  };
  render() {
    return (
      <input onChange={this.changeText} placeholder={this.state.placeholder} />
    );
  }
  changeText(e) {
    console.log(e.target.value);
  }
}

export default SearchBar;
