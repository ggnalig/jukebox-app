
import {GET_TOP_TRACKS, SEARCH_TRACK} from '../types'

const initialState = {
    tracks: [],
    results: [],
    loading:true
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
        default: return state
    }

}