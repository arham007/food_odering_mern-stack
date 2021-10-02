import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Adminmenu from '../Components/admin/Adminmenu';
import Dashboard from '../Components/admin/Dashboard'

const Adminrouter = () => {
    return (
        <div>
            <Router>
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/menu" component={Adminmenu} />
            </Router>
            
        </div>
    )
}

export default Adminrouter
