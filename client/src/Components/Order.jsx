import React from 'react'
import Navbar from './navbar/Navbar'
import Summary from "./Table"
const Order = () => {
    return (
        <div>
            <Navbar />
            <br />
            <div>

            <h3 className="text-center" style={{fontSize:"24px",marginBottom:"10px"}}>Order Summary</h3>
            </div>
            <div style={{marginTop:"20px"}}>

            <Summary />
            </div>
        </div>
    )
}

export default Order
