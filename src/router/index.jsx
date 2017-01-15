import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from 'Components/test/App';
import About from 'Components/test/About';
import Repos from 'Components/test/Repos';
import Repo from 'Components/test/Repo';
import Home from 'Components/test/Home';
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);
let currentVal = store.getState();

const listener = () => {
  const previousVal = currentVal;
  currentVal = store.getState();
  console.log('pre state: ', previousVal, 'next state: ', currentVal);
};

store.subscribe(listener);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

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
