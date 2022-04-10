
import {GET_TOP_TRACKS, USERS_ERROR} from '../types'
import axios from 'axios'
import env from 'react-dotenv'

export const getTopTracks = () => async dispatch => {
    
    try{
        const res = await axios.get(`${env.API_URL}/2.0/?method=chart.gettoptracks&api_key=${env.API_KEY}&format=json`)
        dispatch( {
            type: GET_TOP_TRACKS,
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