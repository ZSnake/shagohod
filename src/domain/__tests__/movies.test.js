import movies, { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from '../movies';

describe('Movies domain model', () => {
  describe('When getting movies', () => {
    const state = {
      movies: [],
      loading: false,
      error: '',
    };
    it('Should set state as loading when the request starts', () => {
      const mockAction = { type: GET_MOVIES };
      const resultState = movies(state, mockAction);
      expect(resultState.loading).toBe(true);
    });
    it('Should return a list of movies when the request is successful', () => {
      const movieResults = [
        {
          title: 'Some other movie',
        },
        {
          title: 'Some movie',
        },
      ]
      const mockAction = { type: GET_MOVIES_SUCCESS, data: movieResults };
      const resultState = movies(state, mockAction);
      expect(resultState.movies).toEqual(movieResults);
    });
    it('Should set the error when the request fails', () => {
      const mockError = { error: 'someError' };
      const mockAction = { type: GET_MOVIES_FAILURE, error: mockError };
      const resultState = movies(state, mockAction);
      expect(resultState.error).toEqual(mockError);
    })
  });
})