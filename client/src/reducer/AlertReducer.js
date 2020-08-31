import { SHOW_ALERT, REMOVE_ALERT } from '../actions/types'

const AlertReducer = (state=[], action) => {
    switch(action.type){
        case SHOW_ALERT:
            return  [...state, action.payload]
        case REMOVE_ALERT:
            return state.filter(el => el.msg === action.payload)
        default:
            return state
    }
}

export default AlertReducer