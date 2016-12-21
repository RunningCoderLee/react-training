import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import CSSModules from 'react-css-modules';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div styleName="logo"></div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
