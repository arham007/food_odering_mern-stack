import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./singleorder.css"
import {io} from "socket.io-client"

const Singleorder = () => {
    
    let [order,setOrder]=useState(null);
    const [socket,setSocket]=useState(null)
    let [stepCompleted,setStepCompleted]=useState(true)
    const statuses=document.querySelectorAll(".status-line");

    const removeClass=()=>{
        for(let i=0 ; i<=statuses.length;i++){
            if(statuses[i] ?.classList.contains("current")){
                statuses[i] ?.classList.remove("current")   
                if(statuses[i]?.previousElementSibling){

                    console.log(statuses[i]?.previousElementSibling.classList.add("step-completed"))                                                                                                      
                }
                // statuses[i] ?.classList.add("step-completed")
            }  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  
    let params=useParams()
   
    useEffect(()=>{                                     
        setSocket(io("http://localhost:5000"))
    },[])

    useEffect(()=>{
        socket ?.emit('join',{id:params.id})
    },[socket])

    useEffect(()=>{
        socket?.on('orderUpdated',(data)=>{
            // console.log(data)
           
                
                const UpdatedOrder={...order}
                UpdatedOrder.staus=data.age
                // console.log(UpdatedOrder)
                setOrder(UpdatedOrder)  
                
                
                // const statuses=document.querySelectorAll(".status-line");
                // for (let i=0;i<statuses.length;i++){
                    
                    //     if(stepCompleted){
                        //         statuses[i].classList.add("step-completed")
                        //     }
                        
                        //     if(statuses[i].innerText === order.staus){
                            
                            //         setStepCompleted(!stepCompleted)
                            
                            
                            //         statuses[i].classList.add("current")
                            //        for (let j=i+1 ; j<statuses.length; j++){
                                //            statuses[j].classList.add("remove")
                                //        }
                                
                                //     }
                                // }
                                
                            })
                        },[socket,order])
                        // console.log(order)
                       
                        useEffect(()=>{
                          statuses.forEach((status)=>{
                            //   console.log(status.dataset.status)
                            
                                // console.log(order.staus)
                                if(status.dataset.status === order ?.staus){
                                
                                    removeClass()
                                    status.classList.add("current")
                                }
                                    
                                })
                            // for (let i=0;i<statuses.length;i++){
                                
                            //     if(stepCompleted){
                            //         statuses[i].classList.add("step-completed")
                            //     }
                            //     console.log(order)
                              
                                
                            //     if(order ?.staus  ===  statuses[i].innerText ){
                                 
                            //         statuses[i-1].classList.add("step-completed")
                            //         if(statuses[i].previousElementSibling){
                            //             setStepCompleted(false)

                            //             statuses[i].previousElementSibling.classList.remove("current")
                            //             for(let j=0 ; j<=statuses.length;j++){
                            //                console.log(statuses[j].className)
                            //                 // if(statuses[j].classList.contains("current")){
                            //                 //     statuses[j].classList.add("step-completed")
                            //                 // }
                            //             }
                            //             statuses[i].classList.add("current")

                            //         }
                                
                                    
                                    
                                    // setStepCompleted(!stepCompleted)
                                    
                                    
                                    
                                    
                                    
                                // }
                                  
                                
                                
                            // }
                            
                                
                      
                        },[order])
                        
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

    // useEffect(()=>{
       
      
    // },[order.staus])
  

    


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
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} data-status="Order-placed"  className="status-line" ><span>Order-placed</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} data-status="Order-confirmation" class="status-line"><span>Order-confirmation</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} data-status="Preparing" class="status-line "><span>Preparing</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} data-status="Out for delivery" class="status-line "><span>Out for delivery</span></li>
                           <li style={{fontSize:"18px",paddingBottom:"60px"}} data-status="Completed" class="status-line"><span>Completed</span></li>
                       </ul>

                   </div>

               </div>

           </section>
        </div>
    )
}

export default Singleorder
