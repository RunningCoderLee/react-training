import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Button } from 'antd';
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <div styleName="logo" />
        <Button type="primary">按钮</Button>
      </div>
    );
  }
}

export default CSSModules(App, styles);
