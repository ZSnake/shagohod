import { getMovies } from '../movies';

describe('Movies Selectors', () => {
  const state = {
    loading: false,
    movies: [
      {
        title: 'Some other movie',
      },
      {
        title: 'Some movie',
      },
    ],
  };
  describe('When getting a list of movies', () => {
    it('Should return a list of matching colleges', () => {
      const movies = getMovies.resultFunc(state);
      expect(movies).toEqual(state.movies);
    });
  });
});
