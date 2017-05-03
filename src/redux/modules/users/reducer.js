import { ADD_USER, LIST_USER } from './actions';

export default function (state = [], action) {
    if (action.type === ADD_USER.REQUEST) {
        console.log("---------------- reducer ADD_USER.REQUEST")
        return [...state, action.payload];
    }
    if (action.type === ADD_USER.SUCCESS) {
        console.log("---------------- reducer ADD_USER.SUCCEEDED")
        return [...state, action.payload.user];
    }
    if (action.type === ADD_USER.FAILURE) {
        console.log("---------------- ADD_USER.FAILED")
        return [...state, action.payload.error];
    }
    if (action.type === LIST_USER.REQUEST) {
        console.log("---------------- LIST_USER.REQUEST")
        return [...state, action.payload];
    }
    if (action.type === LIST_USER.SUCCEEDED) {
        console.log("---------------- LIST_USER.SUCCEEDED")
        return [...state, action.payload];
    }
    if (action.type === LIST_USER.FAILED) {
        console.log("---------------- LIST_USER.FAILED")
        return [...state, action.payload];
    }
    return state;
}
