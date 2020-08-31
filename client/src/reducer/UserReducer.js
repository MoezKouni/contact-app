import { GET_USERS, DELETE_USER, UPDATE_USER, ADD_USER, ERROR_LOADING_USERS, GET_ALL_USERS } from '../actions/types'
import { LOGOUT } from '../actions/types'

let initState = {
    users: null,
    publicUsers: null,
    errors: null
}

const UserReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                errors: null
            }
        case ERROR_LOADING_USERS:
            return {
                ...state,
                errors: action.payload
            }
        case LOGOUT:
            return {
                users: null,
                errors: null
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(el => el._id === action.payload._id ? action.payload : el)
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(el => el._id !== action.payload)
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case GET_ALL_USERS:
            return {
                ...state,
                publicUsers: action.payload
            }
        default:
            return state
    }
}

export default UserReducer;