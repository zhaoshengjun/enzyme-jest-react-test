import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Test = () => <div>Test</div>;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="tylor">
          <li>Test1</li>
          <li>Test2</li>
          <li>Test3</li>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test />
      </div>
    );
  }
}

export default App;
