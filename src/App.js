import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.sate = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default App;
