import { combineReducers } from 'redux'
import AuthReducer from '../reducer/AuthReducer'
import AlertReducer from '../reducer/AlertReducer'
import UserReducer from '../reducer/UserReducer'

export default combineReducers({auth: AuthReducer, alert: AlertReducer, users: UserReducer})