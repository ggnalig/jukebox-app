
import {GET_TOP_TRACKS, SEARCH_TRACK, USERS_ERROR} from '../types'

const initialState = {
    tracks: [],
    results: [],
    loading: true,
    error: {}
}

export const trackReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_TOP_TRACKS:
        return {
            ...state,
            tracks:action.payload,
            loading:false

        }
        case SEARCH_TRACK:
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