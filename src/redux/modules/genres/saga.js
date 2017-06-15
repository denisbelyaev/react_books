import {takeLatest, call} from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './services';
import dispatchSagaActions from '../commonSaga';

// each entity defines 3 creators { request, success, failure }
const {listGenre, getGenre} = actions.sagaActions;

export default function* userSaga() {
  yield takeLatest(actions.LIST_GENRE.REQUEST,
    function*(action) {
      yield call(dispatchSagaActions, listGenre, api.listGenre(action));//arguments: 1.actions(REQUEST, SUCCESS, FAILURE), 2. REQUEST callApi options
    }
  );
  yield takeLatest(actions.GET_GENRE.REQUEST,
    function*(action) {
      yield call(dispatchSagaActions, getGenre, api.getGenre(action));
    }
  );
}