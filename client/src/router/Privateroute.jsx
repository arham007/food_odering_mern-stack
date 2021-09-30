import React from 'react'
import {Redirect , Route} from "react-router-dom";

const Privateroute = ({path , component:Component}) => {
    let token=localStorage.getItem("token");
    let user=localStorage.getItem("user");
    return (
        <Route path={path} render={()=>{
            if(token && user){
                return     <Component />
            }else{
                return <Redirect to="/login" />
            }
        }} />
    )
}

export default Privateroute;
