import { GET_USERS, DELETE_USER, UPDATE_USER, ADD_USER, ERROR_LOADING_USERS, GET_ALL_USERS } from './types'
import axios from 'axios'
import { API_URL } from '../utils/config'



// get all people of the connected user
export const getUsers = () => dispatch => {
    axios.get(`${API_URL}/person`)
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR_LOADING_USERS,
                payload: err.response.data
            })
        })
}
// get public people
export const getPublicUsers = () => dispatch => {
    axios.get(`${API_URL}/person/public`)
        .then(res => {
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR_LOADING_USERS,
                payload: err.response.data
            })
        })
}


export const editUser = user => dispatch => {
    axios.put(`${API_URL}/person/${user._id}`, user)
        .then(() => {
            dispatch({
                type: UPDATE_USER,
                payload: user
            })
            dispatch(getUsers)
        })
        .catch(err => {
            dispatch({
                type: ERROR_LOADING_USERS,
                payload: err.response.data
            })
        })
}


// Add User
export const addUser = user => dispatch => {
    axios.post(`${API_URL}/person`, user)
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR_LOADING_USERS,
                payload: err
            })
        })
}
// Delete User
export const deleteUser = id => dispatch => {
    axios.delete(`${API_URL}/person/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_USER,
                payload: id
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR_LOADING_USERS,
                payload: err.response.data
            })
        })
}
