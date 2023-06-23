import { GETPOSTS, LOGIN, REGISTER } from "../actiontypes";
import axios from "axios";
const apiUrl = "http://localhost:3001";

export const getPosts = (offset) => {
    return async function(dispatch){
        let data = await axios.get(`${apiUrl}/posts/?limit=10&offset=${offset}`)
        return dispatch({type: GETPOSTS, payload: data.data.results})
    }
}
export const logInUser = (credentials) => {
    return async function (dispatch){
        let data = await axios.post(`${apiUrl}/login`, credentials)
        return dispatch({type: LOGIN, payload: data.data})
    }
}
export const registerUser = (userInformation) => {
    return async function(dispatch){
        let data = await axios.post(`${apiUrl}/register`, userInformation)
        return dispatch({type: REGISTER, payload: data.data})
    }
}
