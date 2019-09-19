import axios from "axios";
import { API_BASE, API_VERSION } from "../config/env";


const url = (endpoint) => {
    return `${API_BASE}/${API_VERSION}/${endpoint}`;

}
const post = (endpoint, data = {}) => {
    return axios.post(url(endpoint), data).then(res => res.data);
}

const get = (endpoint, token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.get(url(endpoint)).then(res => res.data);
}

export {
    post,
    get
}
