import React from 'react';
import { Link} from 'react-router-dom'

const PageNotFound = (props) =>
{
    return(
        <>
        <p>404 -  Page Not Found</p>
        {/* <a href="/"> Back to Home </a> */}
        <Link to="/">Back to Home</Link>
        </>
 
 )
}
export default PageNotFound