import {LIST_GENRE, GET_GENRE} from './actions';

const GANRES_INITIAL_STATE = {
  collection: [],
  genre: {
    books: []
  },
  isLoading: false,
  error: null,
};

export default function (state = GANRES_INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_GENRE.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LIST_GENRE.FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    case GET_GENRE.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_GENRE.FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    default:
      return state;
  }
}
