//import React from 'react'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import {reducer as reduxFormReducer} from 'redux-form'
import books from './modules/books/reducer'
import authors from './modules/authors/reducer'
import genres from './modules/genres/reducer'

export function configureStore(history, initialState = {}) {
  let sagaMiddleware = createSagaMiddleware()

  const createStoreWithMiddleware = compose(
    applyMiddleware(
      sagaMiddleware,
    ),
  )(createStore);

  const reducer = combineReducers({
    form: reduxFormReducer,
    books,
    authors,
    genres,
  });

  const store = createStoreWithMiddleware(reducer, initialState);

  sagaMiddleware.run(sagas);
  //store.runSaga = sagaMiddleware.run;
  //store.close = () => store.dispatch(END);//all Sagas blocked on a take Effect

  return store;
}