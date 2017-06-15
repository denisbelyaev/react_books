import {createActionTypes, createAction} from '../commonActions'
export const LIST_BOOK = createActionTypes('LIST_BOOK');
export const GET_BOOK = createActionTypes('GET_BOOK');

export const sagaActions = {
  //request for screens take(action.type)
  listBook: {
    request: () => createAction(LIST_BOOK.REQUEST),
    success: (collection) => createAction(LIST_BOOK.SUCCESS, {collection}),
    failure: (error) => createAction(LIST_BOOK.FAILURE, {error}),
  },
  getBook: {
    request: id => createAction(GET_BOOK.REQUEST, {id}),
    success: (book) => createAction(GET_BOOK.SUCCESS, {book}),
    failure: (error) => createAction(GET_BOOK.FAILURE, {error}),
  },
}