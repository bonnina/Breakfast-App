import { combineReducers } from 'redux'
import details from './details'
import order from './order'
import api from './api'

export default combineReducers({
  order, 
  details,
  api
});