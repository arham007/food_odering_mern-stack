import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Adminmenu from '../Components/admin/Adminmenu';
import Dashboard from '../Components/admin/Dashboard'
import Addproduct from '../Components/menutab/Addproduct';

const Adminrouter = () => {
    return (
        <div>
            <Router>
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/menu" component={Adminmenu} />
                <Route exact path="/admin/addproduct" component={Addproduct} />
            </Router>
            
        </div>
    )
}

export default Adminrouter
