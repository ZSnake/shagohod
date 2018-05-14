// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../../domain/movies';
import { getMovies } from '../../selectors/movies';
import GoogleMaps from '../../components/GoogleMaps';

type Props = {
  movies: Object[],
  fetchAllMovies: Function,
};

class MapMovies extends React.Component<Props> {
  static defaultProps = {
    fetchAllMovies: () => {},
    movies: [],
  }

  componentDidMount = () => {
    this.props.fetchAllMovies();
  };

  render = () => (
    <div className="mapContainer">
      <GoogleMaps movies={this.props.movies}/>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchAllMovies: fetchAllMovies(dispatch),
});

const mapStateToProps = state => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapMovies);
