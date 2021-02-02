//Asynchronous 
export const ADD_TASK = 'ADD_TASK'
export const TASK_ADDED = 'TASK_ADDED'

export const DELETE_TASK = 'DELETE_TASK'
export const TASK_DELETED = 'TASK_DELETED'

export const LOAD_TASKS = 'LOAD_TASKS' //redux-saga listens
export const TASKS_LOADED = 'TASKS_LOADED' //reduxlistens

export const LOGIN_USER='LOGIN_USER'//redux-saga listens
export const USER_LOGGEDIN='SER_LOGGEDIN'//reduxlistens

export const LOGOUT_USER='LOGOUT_USER'
export const USER_LOGGEDOUT='USER_LOGGEDOUT'



//Not a Asynchronous - no api calls
export const SET_ALERT ='SET_ALERT'
export const RESET_ALERT='RESET_ALERT'