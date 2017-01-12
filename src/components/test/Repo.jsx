import React from 'react';
import Content from './Content';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 12345,
    };
  }

  handleClick = () => {
    this.setState({
      text: 54321,
    });
  }

  render() {
    const { params } = this.props;
    return (
      <div>
        <h2>{params.repoName}<button onClick={() => this.handleClick()}>改变props</button></h2>
        <Content
          ref={(c) => { this.cont = c; }}
          text={this.state.text}
        />
      </div>
    );
  }

}

Repo.propTypes = {
  params: React.PropTypes.shape({
    repoName: React.PropTypes.string,
  }),
};

export default Repo;
