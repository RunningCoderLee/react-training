import React from 'react';
import App from './Content';

const Repo = ({ params }) => (
  <div>
    <h2>{params.repoName}</h2>
    <App />
  </div>
);

Repo.propTypes = {
  params: React.PropTypes.shape({
    repoName: React.PropTypes.string,
  }),
};

export default Repo;
