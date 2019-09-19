import { NEW_TODOS_FULFILLED, NEW_TODOS_REJECTED } from '../actions/newTodo';

const initialState = {
    fetching: false,
    todos: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type){
        case NEW_TODOS_FULFILLED:
            return {
                ...state,
                todos: action.payload
            };
        case NEW_TODOS_REJECTED:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}