import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Reset from '../Components/Reset';
import Newpassword from '../Components/Newpassword';
import Verification from '../Components/Verification';
import Menu from '../Components/Menu';
import Fastfood from '../Components/Fastfood'
import Pizza from '../Components/Pizza'
import Bbq from '../Components/Bbq';
import Extra from '../Components/Extra';
import Beverage from '../Components/Beverage';
import Cart from '../Components/Cart';
import Privateroute from './Privateroute';

import Checkout from '../Components/Checkout';
import Orderplace from '../Components/Orderplace';
import Order from '../Components/Order';



const Router = () => {
    return (
        <div>
            
            <BrowserRouter>
     
                <Route exact path="/" component={Menu} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/login/:token" component={Verification} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/reset" component={Reset} />
                <Route exact path="/fastfood" component={Fastfood} />
                <Route exact path="/pizza" component={Pizza} />
                <Route exact path="/bbq" component={Bbq} />
                <Route exact path="/extra" component={Extra} />
                <Route exact path="/cart" component={Cart} />
                <Privateroute exact path="/ordercart" component={Checkout} />
                <Route exact path="/beverage" component={Beverage} />
                <Route exact path="/reset/:token" component={Newpassword} />
                <Privateroute exact path="/checkout" component={Orderplace} />
                <Privateroute exact path="/order" component={Order} />
       
            </BrowserRouter>
            
            
        </div>
    )
}

export default Router;
