import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from 'Components/test/App';
import About from 'Components/test/About';
import Repos from 'Components/test/Repos';
import Repo from 'Components/test/Repo';
import Home from 'Components/test/Home';

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
