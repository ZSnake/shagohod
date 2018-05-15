// @flow

import { createSelector } from 'reselect';
import type { Movie } from '../types/movies';
import type { State } from '../domain/movies';

export const getMoviesState = (state: Object): State => state.movies;

export const getMovies = createSelector(
  [getMoviesState],
  (moviesState: State): Movie[] => moviesState.movies,
);
