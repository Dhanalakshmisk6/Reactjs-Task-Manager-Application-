import {USER_LOGGEDIN,USER_LOGGEDOUT} from '../config/actionTypes'

const initialstate=null


export const userReducer = (state=initialstate,action) =>
{

switch (action.type) {
    case USER_LOGGEDIN:
        return action.user
        case USER_LOGGEDOUT:
        return initialstate
        default:
        return state
}
}