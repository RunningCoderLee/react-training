import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Button } from 'antd';
import logo from './logo.svg';
import styles from './content.scss';

const suffix = '被调用，this指向：';
/* eslint-disable */

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log(`componentWillMount${suffix}`, this);
  }

  componentDidMount() {
    console.log(`componentDidMount${suffix}`, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(`componentWillReceiveProps${suffix}`, this);
    console.log('nextProps: ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate${suffix}`, this);
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`componentWillUpdate${suffix}`, this);
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate${suffix}`, this);
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount${suffix}`, this);
  }

  handleClick() {
    //eslint-disable-next-line
    console.log(`handleClick${suffix}`, this);
  }

  handleUpdate = () => {
    this.setState({
      value: 1,
    });
  }

  render() {
    console.log(`render${suffix}`, this);
    this.handleClick()
    window.handle = this.handleClick;
    window.handle();

    return (
      <div styleName="App">
        <div styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h2>Welcome to React text = {this.props.text}</h2>
        </div>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div styleName="logo" />
        <Button type="primary" onClick={this.handleClick}>按钮</Button><br/>
        <Button type="primary" onClick={this.handleUpdate}>更新状态</Button>
      </div>
        );
  }
}

export default CSSModules(Content, styles);
