import {takeEvery,call,put, all} from 'redux-saga/effects'
import * as types from '../config/actionTypes'
import * as service from '../services/UserService'
import * as actions from '../actions/userActions'
import * as alert from '../actions/alertActions'
import history from '../history'


function* login({creds})
{
    try{
        const user =yield call(service.login,creds)
        yield put(actions.userLoggedIn(user))
        yield put(alert.setAlertAction(
            {
                text:'User LoggedIn',
                color:'success'
            }
        ))
        history.push('/tasks')
    }
    
    
    
    catch(e)
    {
console.log(e)
yield put(alert.setAlertAction(
    {
        text:e.msg,
                color:'danger'
    }
))
    }
}

function* logout()
{
    yield call(service.logout)
    yield put(actions.userLoggedOut())
    history.push('/login')
}

function* watchLoginUser()
{
    yield takeEvery(types.LOGIN_USER,login)
}
function* watchLogoutUser()
{
    yield takeEvery(types.LOGOUT_USER,logout)
}

export function* userSaga()
{
    yield all(
        [
            watchLoginUser(),
            watchLogoutUser()
        ]
    )
}