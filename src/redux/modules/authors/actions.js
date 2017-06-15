import {createActionTypes, createAction} from '../commonActions'
export const LIST_AUTHOR = createActionTypes('LIST_AUTHOR');
export const GET_AUTHOR = createActionTypes('GET_AUTHOR');

export const sagaActions = {
  //request for screens take(action.type)
  listAuthor: {
    request: () => createAction(LIST_AUTHOR.REQUEST),
    success: (collection) => createAction(LIST_AUTHOR.SUCCESS, {collection}),
    failure: (error) => createAction(LIST_AUTHOR.FAILURE, {error}),
  },
  getAuthor: {
    request: id => createAction(GET_AUTHOR.REQUEST, {id}),
    success: (author) => createAction(GET_AUTHOR.SUCCESS, {author}),
    failure: (error) => createAction(GET_AUTHOR.FAILURE, {error}),
  },
}