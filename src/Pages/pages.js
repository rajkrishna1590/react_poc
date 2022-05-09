import React from 'react';
import {Link,Outlet} from  'react-router-dom'
import './pages.scss';


function Pages() {

return (
    <div id="pages">
        <div className="topnav">
            <Link to='/home'> Home</Link>
            <Link to='/products'> Products</Link>
            <Link to='/cart'> Cart</Link>

<Link to='/contact'> Contact</Link>
            <Link to='/about'> About</Link>
            <Link to='/admin'> Admin</Link>

        </div>
        <Outlet />
        
    </div>
    )
    
 
}
 
export default Pages;

 
 