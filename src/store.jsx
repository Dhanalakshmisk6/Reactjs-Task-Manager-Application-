import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';
import createSagamiddleware from 'redux-saga';
import rootSaga from './sagas/rootsaga'

import {checkUser} from './services/UserService'
import {userActions, userLoggedIn} from './actions/userActions'
const saga=createSagamiddleware()

// const store = createStore(rootReducer,applyMiddleware(saga,logger))
const store = createStore(rootReducer,applyMiddleware(saga))
const user =checkUser()

if(user)
{
    store.dispatch(userLoggedIn(user))
}
saga.run(rootSaga)
export default store



