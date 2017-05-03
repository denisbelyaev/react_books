//import React from 'react'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

//import * as reducers from './reducers'
import users from './modules/users/reducer'
var reducers = {users};


export function configureStore(history, initialState={}) {
    let sagaMiddleware = createSagaMiddleware()

    const createStoreWithMiddleware = compose(
        applyMiddleware(
            sagaMiddleware,
        ),
    )(createStore);


    const store = createStoreWithMiddleware(combineReducers({ ...reducers }), initialState);

    sagaMiddleware.run(sagas);
    //store.runSaga = sagaMiddleware.run;
    //store.close = () => store.dispatch(END);//all Sagas blocked on a take Effect

    return store;
}