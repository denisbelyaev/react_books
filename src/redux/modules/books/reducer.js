import {LIST_BOOK, GET_BOOK} from './actions';

const BOOKS_INITIAL_STATE = {
  collection: [{
    authors: [],
    genres: [],
  }],
  isLoading: false,
  error: null,
};

export default function (state = BOOKS_INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_BOOK.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LIST_BOOK.FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    case GET_BOOK.SUCCESS:
      return [...state, action.payload];
    case GET_BOOK.FAILURE:
      return [...state, action.payload];
    default:
      return state;
  }
}
