
import { combineReducers } from 'redux'
import {trackReducer} from './tracksReducer'
import {artistReducer} from './artistsReducer'


export default combineReducers({
  tracks: trackReducer,
  artists: artistReducer
})