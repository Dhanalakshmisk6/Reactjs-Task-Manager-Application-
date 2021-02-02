import * as types from '../config/actionTypes'

export const setAlertAction = msg =>
{
    return {
        type:types.SET_ALERT,
        msg
    }
}
export const resetsetAlertAction = () =>
{
    return {
        type:types.RESET_ALERT
    }
}