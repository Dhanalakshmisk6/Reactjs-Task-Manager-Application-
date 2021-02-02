import React from 'react';
import {connect} from 'react-redux'
import { Alert } from 'reactstrap';
import {resetsetAlertAction} from '../../../actions/alertActions'

const GlobalAlert = (props) =>
{
    // let text ='TESTING'
    // let color ='danger'
    const { text,color}=props.alert

    setTimeout(()=>props.dispatch(resetsetAlertAction()),3000)

    if(text === '')
    {
        return <></>
    }
    
return(
    <Alert color={color}>{text}</Alert>
)
}
const mapStateToProps = (state) => { //store.getState()
    return {
        alert: state.alert
    }
}
export default connect(mapStateToProps)(GlobalAlert)