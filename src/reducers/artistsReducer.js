
import {GET_TOP_ARTISTS, SEARCH_ARTIST, USERS_ERROR} from '../types'

const initialState = {
    artists: [],
    results: [],
    loading: true,
    error: {}
}

export const artistReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_TOP_ARTISTS:
        return {
            ...state,
            artists:action.payload,
            loading:false

        }
        case SEARCH_ARTIST:
        return {
            ...state,
            results:action.payload,
            loading:false

            }
        case USERS_ERROR:
        return {
            ...state,
            error:action.payload,
            loading:false

        }
        default: return state
    }

}