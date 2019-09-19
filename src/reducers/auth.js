import { LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED, USER_INIT, CHECK_USER_FULFILLED } from '../actions/auth';

const initialState = {
    wait: false,
    user: {},

};

export function userInit(user = {}){
    return {
        type : USER_INIT,
        payload : user
    }
}

export default (state = initialState, action) => {
    switch (action.type){
        case LOGIN_USER_FULFILLED:
            return {
                ...state,
                user: action.payload
            };
        case LOGIN_USER_REJECTED:
            return {
                ...state,
                user: action.payload
            };
        case USER_INIT :
            return {
                ...state,
                user: action.payload
            }
        case CHECK_USER_FULFILLED:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}