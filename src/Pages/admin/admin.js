import React from "react";
import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux'

function Admin() {
    const counter = useSelector(state => state.counter)
    
    return (
      <div>
        Admin Panel - counter1 {counter.value}
        <br />
        <Link to="/admin/category"> Category</Link> {" | "}
        <Link to="/admin/products"> Products</Link>
      </div>
    );
}
export default Admin;