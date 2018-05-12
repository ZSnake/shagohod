// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../../domain/movies';

type Props = {
  fetchAllMovies: Function,
};

class MapMovies extends React.Component<Props> {
  static defaultProps = {
    fetchAllMovies: () => {},
  }

  componentDidMount = () => {
    this.props.fetchAllMovies();
  };

  render = () => (
    <div>
      <h1>Maaaaps</h1>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchAllMovies: fetchAllMovies(dispatch),
});

export default connect(() => ({}), mapDispatchToProps)(MapMovies);
