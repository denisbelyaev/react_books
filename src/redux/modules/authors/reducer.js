import {LIST_AUTHOR, GET_AUTHOR} from './actions';

const AUTHORS_INITIAL_STATE = {
  collection: [],
  isLoading: false,
  error: null,
};

export default function (state = AUTHORS_INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_AUTHOR.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LIST_AUTHOR.FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    case GET_AUTHOR.SUCCESS:
      return [...state, action.payload];
    case GET_AUTHOR.FAILURE:
      return [...state, action.payload];
    default:
      return state;
  }
}
