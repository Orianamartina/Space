import { GETPOSTS } from "../actiontypes";
import axios from "axios";
const apiUrl = "http://localhost3001";

export const getPosts = (offset) => {
    return async function(dispatch){
        let data = axios.get(`${apiUrl}/posts/?limit=10%offset=${offset}`)
        return dispatch({type: GETPOSTS, payload: data})
    }
}

