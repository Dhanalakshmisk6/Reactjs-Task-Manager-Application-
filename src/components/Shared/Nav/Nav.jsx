import React from 'react';
import {connect} from 'react-redux'
import {Button} from 'reactstrap'
import { NavLink} from 'react-router-dom'
import {logoutUserAction} from '../../../actions/userActions'




const Nav = (props) =>
{
    const {user} = props
    const handleLogout =() =>
    {
    props.dispatch(logoutUserAction())
    }
   return(
       <nav className="mt-2">
           {user && <Button className="btn btn-danger btn-sm float-right" 
           onClick={handleLogout}
           >LogOut</Button>}


           {
              !user && 
               <>
               <NavLink to="/register" className="btn btn-link float-right" activeClassName="btn btn-primary text-white" 
           >Register</NavLink>
           <NavLink to="/login" className="btn btn-link float-right"activeClassName="btn btn-primary text-white"> 
           Login</NavLink>
               </>

           }
           
            
           
       </nav>
   )
}
const mapStateToProps = (state) => { //store.getState()
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(Nav)