import { createSelector } from 'reselect';

export const getMoviesState = state => state.movies;

export const getMovies = createSelector(
  [getMoviesState],
  moviesState => moviesState.movies,
);
