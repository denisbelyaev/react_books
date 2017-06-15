import {fork} from 'redux-saga/effects';

import booksSaga from './modules/books/saga';
import authorsSaga from './modules/authors/saga';
import ganresSaga from './modules/genres/saga';

//Composing Sagas
export default function* sagas() {
  yield [
    fork(booksSaga),
    fork(authorsSaga),
    fork(ganresSaga)
  ];
}