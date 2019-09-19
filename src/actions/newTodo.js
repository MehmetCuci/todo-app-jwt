import axios from "axios";
import jwt from "jsonwebtoken";

//import { BASE_URL} from "../config/env";

export const NEW_TODOS_FULFILLED = "NEW_TODOS_FULFILLED";
export const NEW_TODOS_REJECTED = "NEW_TODOS_ERROR";


export function postNewTodo({task, userId}){
    const token = localStorage.getItem("userToken");
    return dispatch => {
        dispatch({
            type: "NEW_TODOS",
            payload: axios.post(`http://localhost:3333/v1/todos/add`, {
                "OwnerID" : userId,
                "name"  : task,
                "done" : 0
            })
                .then(result => result.data)
        })
    }
}

