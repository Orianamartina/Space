import { GETPOSTS } from "../actiontypes"

const initialState = {
    posts: []

}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case GETPOSTS:
            return{
                ...state,
                posts: action.payload
            }






    }



}