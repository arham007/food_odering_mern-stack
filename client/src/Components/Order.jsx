import React , {useContext, useEffect, useState} from 'react'
import Navbar from './navbar/Navbar'
import Summary from "./Table"

const Order = () => {
    useEffect(()=>{
        window.history.forward()
    },[])
   
 
    
    return (
        <div>
            <Navbar />
            <br />
            <div className="container">

            <h3  style={{marginBottom:"10px",fontSize:"20px",padding:"10px 10px"}}>ALL Orders</h3>
            </div>
        

       
         

            <div style={{marginTop:"20px"}}>

            <Summary />
            </div>
        </div>
    )
}

export default Order
