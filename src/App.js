import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import UserRoute from './routers/userRoute'
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'
import TaskManager from './components/TaskManager/TaskManager.jsx'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import TaskDetail from './components/TaskManager/TaskDetail/TaskDetail'
import PageNotFound from './components/Shared/pageNotFound/pageNotFound';


// import Login from './components/Login/Login.jsx'


function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
                </div>
            </div>
            

            <div className="row">
                <div className="col">
                  <Switch>
                   
                    {/* <Route path="/" render={  () => <TaskManager/> }></Route> */}
                    <Route path="/" exact render={() => <Redirect to="/login"/> }></Route>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <UserRoute path="/tasks" exact component={TaskManager}/>
                    <UserRoute path="/tasks/:id" component={TaskDetail}/>
                    <Route path="/**" component={PageNotFound}/>
                  </Switch>
                    

                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default App


