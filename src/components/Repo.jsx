import React from 'react'
import App from '../App.js';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <App />
      </div>
    )
  }
})