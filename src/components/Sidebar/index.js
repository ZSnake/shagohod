// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { fetchFilteredMovies, fetchAllMovies } from '../../domain/movies';

type Props = {
  getFilteredMovies: Function,
  getAllMovies: Function,
};

type State = {
  filter: string,
  searchTerm: string,
};

class Sidebar extends React.Component<Props, State> {
  static defaultProps = {
    getFilteredMovies: () => {},
    getAllMovies: () => {},
  };

  state = {
    filter: 'none',
    searchTerm: '',
  };

  onFieldChange = (event: SyntheticInputEvent<*>): void => {
    const { value } = event.target;
    this.setState({
      ...this.state,
      searchTerm: value,
    });
  };

  onSearch = () => {
    const { filter, searchTerm } = this.state;
    if (filter === 'none') {
      this.props.getAllMovies();
    } else {
      this.props.getFilteredMovies(filter, searchTerm);
    }
  }

  changeFilter = (filter: string): void => {
    this.setState({
      ...this.state,
      searchTerm: filter === 'none' ? ' ' : this.state.searchTerm,
      filter,
    });
  }

  render = () => (
    <div className="sidebar shadow p-3 mb-5 bg-white rounded">
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle filtersDropdown shadow p-3 bg-white rounded"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter by
        </button>
        <div className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={() => this.changeFilter('none')}>None</a>
          <a className="dropdown-item" onClick={() => this.changeFilter('title')}>Title</a>
          <a className="dropdown-item" onClick={() => this.changeFilter('release_year')}>Release Year</a>
          <a className="dropdown-item" onClick={() => this.changeFilter('director')}>Director</a>
        </div>
        <input
          type="email"
          className="form-control searchInput"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Search term"
          value={this.state.searchTerm}
          onChange={this.onFieldChange}
        />
        <button className="btn btn-primary searchButton" onClick={this.onSearch}>Search</button>
        <small className="form-text text-muted">Search by: {this.state.filter}</small>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getFilteredMovies: fetchFilteredMovies(dispatch),
  getAllMovies: fetchAllMovies(dispatch),
});

export default connect(() => ({}), mapDispatchToProps)(Sidebar);
