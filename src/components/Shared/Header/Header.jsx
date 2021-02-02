import React from 'react';
import { Row,Col } from 'reactstrap';
import Nav from '../../../components/Shared/Nav/Nav';
import Alert from '../Alert/Alert'

const Header = (props) =>
{
    return(

       <>
       <Row>
           <Col>
           
           <h1>Task Manager</h1></Col>
   
    <Col>
    
    <Nav/>
    </Col>
</Row>
<hr/>
<Alert />
       </>
    )
    
    
}

export default Header;