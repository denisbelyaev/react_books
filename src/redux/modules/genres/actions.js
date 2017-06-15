import {createActionTypes, createAction} from '../commonActions'
export const LIST_GENRE = createActionTypes('LIST_GENRE');
export const GET_GENRE = createActionTypes('GET_GENRE');

export const sagaActions = {
  //request for screens take(action.type)
  listGenre: {
    request: () => createAction(LIST_GENRE.REQUEST),
    success: (collection) => createAction(LIST_GENRE.SUCCESS, {collection}),
    failure: (error) => createAction(LIST_GENRE.FAILURE, {error}),
  },
  getGenre: {
    request: id => createAction(GET_GENRE.REQUEST, {id}),
    success: (genre) => createAction(GET_GENRE.SUCCESS, {genre}),
    failure: (error) => createAction(GET_GENRE.FAILURE, {error}),
  },
}