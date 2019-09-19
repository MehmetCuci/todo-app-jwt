import axios from "axios";
import {userInit} from "../reducers/auth";

export const LOGIN_USER_FULFILLED = "LOGIN_USER_FULFILLED";
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED";
export const USER_INIT = "USER_INIT";
export const CHECK_USER_FULFILLED = "CHECK_USER_FULFILLED";


export function doLogin({email, password}) {
    return dispatch => {
        dispatch({
            type: "LOGIN_USER",
            payload: axios.post("http://localhost:3333/v1/auth/login", {
                email,
                password
            }).then(result => result.data)
                .then(res => {
                    if (res.status){
                        localStorage.setItem("userToken", res.token);
                        return userInit({email: email});
                    }
                    else{
                        alert(res.message);
                    }
                })
        })
    }
}

export function checkUser({token}) {
    return dispatch => {
        dispatch({
            type: "CHECK_USER",
            payload: axios.post("http://localhost:3333/v1/check")
                .then(result => result.data)
                .then(res => {
                    if (res.status){
                        return true;
                    }
                    else {
                        return false;
                    }
                })
        })
    }
}

