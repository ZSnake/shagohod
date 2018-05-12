// @flow
import actionTypeGenerator from '../utils/actionTypeGenerator';
import client from '../utils/client';
import baseUrl from '../config/api';

export const [GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE] = actionTypeGenerator('GET_MOVIES');

type State = {
  movies: Object[],
  loading: boolean,
  error: string,
};

const initialState: State = {
  movies: [],
  loading: false,
  error: '',
};

const reducer = (state: State = initialState, action: Object) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.data,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const fetchAllMovies = (dispatch: Function) =>
  () => {
    dispatch({ type: GET_MOVIES });
    client.get(`${baseUrl}/movies`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: GET_MOVIES_SUCCESS, data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_MOVIES_FAILURE, error });
      });
  };

export default reducer;
