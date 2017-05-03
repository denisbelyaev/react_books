import { put, call } from 'redux-saga/effects';
import callApi from './commonService';

export default  function* dispatchSagaActions(entity, options) {
    //if entity not save or other error, catch error in services "fetch"
    try {
        console.log("------------------------------------------ dispatchSagaActions")
        const response = yield call(callApi, options);//fetch request
        // let response = {
        //     payload: {
        //         status: 200,
        //         success: true,
        //         user: {
        //             name: "vasya"
        //         }
        //     }
        // }
        console.log("------------------------------------------ callApi response", response)
        yield put(entity.success(...response));
    } catch (error) {
        yield put(entity.failure(...error));
    }
}
