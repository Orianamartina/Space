import { GETPICOFDAY, GETPOSTS, LOGIN, REGISTER } from "../actiontypes"

const initialState = {
    posts: [],
    user: {},
    picOfDay: ""
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case GETPOSTS:
            return{
                ...state,
                posts: action.payload
            }
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }  
        case REGISTER:
            return {
                ...state,
                user: action.payload
            }
               
        case GETPICOFDAY:
            return{
                ...state,
                picOfDay: action.payload
            }
        default:
            return state




    }



}

export default reducer