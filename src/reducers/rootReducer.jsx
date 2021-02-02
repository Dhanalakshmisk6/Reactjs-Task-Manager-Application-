import { combineReducers } from 'redux'

import { taskReducer } from './taskReducer';

import {alertReducer} from './alertReducer'

import {userReducer} from './userReducers'

export default combineReducers({
    tasks: taskReducer,
alert:alertReducer,
user: userReducer
    
})