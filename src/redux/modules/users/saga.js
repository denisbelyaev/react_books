import { takeLatest, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './services';
import dispatchSagaActions from '../commonSaga';

// each entity defines 3 creators { request, success, failure }
const { addUser, getUser, updateUser, deleteUser, listUser } = actions.sagaActions;

export default function* userSaga() {
    yield takeLatest(actions.ADD_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, addUser, api.addUser(action));//arguments: 1.actions(REQUEST, SUCCESS, FAILURE), 2. REQUEST callApi options
        }
    );
    yield takeLatest(actions.GET_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, getUser, api.getUser(action));
        }
    );
    yield takeLatest(actions.UPDATE_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, updateUser, api.updateUser(action));
        }
    );
    yield takeLatest(actions.DELETE_USER.REQUEST,
        function* (action) {
            yield call(dispatchSagaActions, deleteUser, api.deleteUser(action));
        }
    );
    yield takeLatest(actions.LIST_USER.REQUEST,
        function* (action) {
            console.log("============================");
            yield call(dispatchSagaActions, listUser, api.listUser(action));
        }
    );
}