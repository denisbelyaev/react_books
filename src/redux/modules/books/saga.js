import {takeLatest, call} from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './services';
import dispatchSagaActions from '../commonSaga';

// each entity defines 3 creators { request, success, failure }
const {listBook, getBook} = actions.sagaActions;

export default function* userSaga() {
  yield takeLatest(actions.LIST_BOOK.REQUEST,
    function*(action) {
      yield call(dispatchSagaActions, listBook, api.listBook(action));//arguments: 1.actions(REQUEST, SUCCESS, FAILURE), 2. REQUEST callApi options
    }
  );
  yield takeLatest(actions.GET_BOOK.REQUEST,
    function*(action) {
      yield call(dispatchSagaActions, getBook, api.getBook(action));
    }
  );
}