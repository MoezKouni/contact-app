import { SHOW_ALERT, REMOVE_ALERT } from './types'

export const showAlert = (alert) => {
    return {
        type: SHOW_ALERT,
        payload: alert
    }
}
export const removeAlert = (msg) => {
    return {
        type: REMOVE_ALERT,
        payload: msg
    }
}