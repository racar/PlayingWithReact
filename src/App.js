import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h1>This is the {this.props.text} component</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/><h1>{this.props.children}</h1>
          Add some event:
          <button onClick={this.launchAlert}>Give me an alert!</button>
        </p>
      </div>
    );

  }

launchAlert(){
  alert('Take this!')
}

}



export default App;
