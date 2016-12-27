import React from 'react';
import { Link } from 'react-router';

const NavLink = ({ children, ...props }) => (
  <Link {...props} activeClassName="active">{children}</Link>
);

NavLink.propTypes = {
  children: React.PropTypes.string,
};

export default NavLink;
