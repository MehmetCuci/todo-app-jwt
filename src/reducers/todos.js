import { FETCH_TODOS_PENDING, FETCH_TODOS_FULFILLED, FETCH_TODOS_REJECTED } from '../actions/todos';

const initialState = {
    fetching: false,
    fetched: false,
    todos: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type){
        case FETCH_TODOS_FULFILLED:
            return {
                ...state,
                todos: action.payload
            };
        case FETCH_TODOS_REJECTED:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}