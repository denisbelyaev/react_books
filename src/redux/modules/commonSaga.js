import {put, call} from 'redux-saga/effects';
import callApi from './commonService';

export default  function* dispatchSagaActions(entity, options) {
  //if entity not save or other error, catch error in services "fetch"
  try {
    const response = yield call(callApi, options);//fetch request

    if (response.success) {
      yield put(entity.success(response.result));
    } else {
      throw response.result;
    }
  } catch (error) {
    yield put(entity.failure(error));
  }
}
