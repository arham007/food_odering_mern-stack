import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./singleorder.css"

const Singleorder = () => {
    let params=useParams()
  console.log(params.id)
    useEffect(()=>{
        fetch("http://localhost:4000/singleorderdetails",{
            method:"Post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                id:params.id
            })
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
           <section className="status">
               <div className="container mx-auto">
                   <div className="status-box w-2/3 mx-auto">
                       <div class="mb-12" style={{display:"flex",justifyContent:"space-between"}}>
                           <h1 class="text-xl font-weight-bold">Track delivery status</h1>
                           <h6 style={{color:"green",}} class="bg-white py-1 rounded-full px-4 ">64646464341346446464</h6>
                       </div>
                       <ul>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} class="status-line step-completed "><span>Order-placed</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} class="status-line current"><span>Order-confirmation</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} class="status-line "><span>Preparation</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} class="status-line "><span>Out for delivery</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} class="status-line"><span>Completed</span></li>
                       </ul>

                   </div>

               </div>

           </section>
        </div>
    )
}

export default Singleorder
