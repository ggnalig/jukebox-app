
import {SEARCH_ARTIST, SEARCH_TRACK, USERS_ERROR} from '../types'
import axios from 'axios'
import env from 'react-dotenv'

export const search = (keyword, method) => async dispatch => {
    console.log(keyword, method, 'keyword method')
    const type = method === 'artist' ? SEARCH_ARTIST : SEARCH_TRACK;
    try{
        const res = await axios.get(`${env.API_URL}/2.0/?method=${method}.search&${method}=${keyword}&api_key=${env.API_KEY}&format=json`)
        dispatch( {
            type,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}