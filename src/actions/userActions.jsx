import * as types from '../config/actionTypes'

export const loginUserAction = (creds) =>
{
    return {
        type:types.LOGIN_USER,
        creds
    }
}
export const userLoggedIn = (user) =>
{
    return {
        type:types.USER_LOGGEDIN,
        user
    }
}
export const logoutUserAction = () =>
{
    return {
        type:types.LOGOUT_USER
        
    }
}
export const userLoggedOut = () =>
{
    return {
        type:types.USER_LOGGEDOUT
       
    }
}