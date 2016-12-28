import React from 'react';
import NavLink from './NavLink';

const App = ({ children }) => (
  <div>
    <h1>React Router Tutorial</h1>
    <ul>
      <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/repos">Repos</NavLink></li>
    </ul>
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
