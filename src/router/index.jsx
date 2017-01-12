/* eslint-disable */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from 'Components/test/App';
import About from 'Components/test/About';
import Repos from 'Components/test/Repos';
import Repo from 'Components/test/Repo';
import Content from 'Components/test/Content';
import Home from 'Components/test/Home';


console.log('首次挂载');
let instance = render(<App />, document.getElementById('root'));

window.renderComponent = () => {
  console.log('挂载');
  instance = render(<App />, document.getElementById('root'));
};

window.setState = () => {
  console.log('更新');
  instance.setState({ foo: 'bar' });
};

window.unmountComponentAtNode = () => {
  console.log('卸载');
  unmountComponentAtNode(document.getElementById('root'));
};

console.log('JSX中的闭合标签是ReactElement');
console.log(<h1>hello world</h1>);
console.log(<App />);

console.log('组件、ReactElement与组件实例');
console.log(Content);
console.log(<Content />);
console.log(instance);

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default routes;
