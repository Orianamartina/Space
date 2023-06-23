import { GETPOSTS, LOGIN, REGISTER } from "../actiontypes"

const initialState = {
    posts: [],
    user: {}

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
            return  "hola"
               
            
        default:
            return state




    }



}

export default reducer