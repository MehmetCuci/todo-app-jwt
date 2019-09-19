import axios from "axios";
//import { BASE_URL} from "../config/env";

export const FETCH_TODOS_PENDING = "FETCH_TODOS_PENDING";
export const FETCH_TODOS_FULFILLED = "FETCH_TODOS_FULFILLED";
export const FETCH_TODOS_REJECTED = "FETCH_TODOS_REJECTED";

axios.defaults.headers.common['Authorization'] = localStorage.getItem("userToken");
export function getTodos(){
    return dispatch => {
        dispatch({
            type: "FETCH_TODOS",
            payload:  axios.get("http://localhost:3333/v1/todos/")
                .then(result => result.data)
        })
    }
}