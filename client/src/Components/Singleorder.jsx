import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./singleorder.css"


const Singleorder = () => {
   
    let [order,setOrder]=useState({});
    let [stepCompleted,setStepCompleted]=useState(true)
    let params=useParams()
   
    
    
    useEffect(()=>{
        fetch("http://localhost:4000/singleorderdetails",{
            method:"Post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                id:params.id
            })
        }).then(res =>res.json())
        .then(res => setOrder(res.body))
        .catch(err => console.log(err))
    },[])
    useEffect(()=>{
        const statuses=document.querySelectorAll(".status-line");
        console.log(order.staus)
        for (let i=0;i<statuses.length;i++){
            
            if(stepCompleted){
                statuses[i].classList.add("step-completed")
            }
            
            if(statuses[i].innerText === order.staus){
                setStepCompleted(!stepCompleted)
             
                statuses[i].classList.add("current")
               for (let j=i+1 ; j<statuses.length; j++){
                   statuses[j].classList.add("remove")
               }
               
            }
        }
    },[order])



    return (

        <div>
        
           <section className="status">
               <div className="container mx-auto">
                   <div className="status-box w-2/3 mx-auto">
                       <div class="mb-12" style={{display:"flex",justifyContent:"space-between"}}>
                           <h1 class="text-xl font-weight-bold">Track delivery status</h1>
                           <h6  class="bg-white py-1 rounded-full px-4 " style={{color:"green",fontSize:"13px"}} >64646464341346446464</h6>
                       </div>
                       <ul>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} className="status-line" ><span>Order-placed</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} class="status-line"><span>Order-confirmation</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} class="status-line "><span>Preparing</span></li>
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
