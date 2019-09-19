import { combineReducers } from "redux";
import todos from "./todos";
import newTodo from "./newTodo";
import auth from "./auth";
export default combineReducers({
    todos,
    newTodo,
    auth

});