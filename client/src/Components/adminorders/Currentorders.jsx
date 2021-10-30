import React, { useEffect, useState } from 'react';
import "./currentorder.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {io} from "socket.io-client"

const Currentorders = () => {
    const [age, setAge] =useState('');
    const [id,setId]=useState("")
    const [socket,setSocket]=useState(null)
    const [data,setData]=useState("")

    useEffect(()=>{
        setSocket(io("http://localhost:5000"))
    },[])
    useEffect(()=>{
        socket?.emit('orderDetails',{
            id,
            age
        })
    },[socket])
    useEffect(()=>{
        fetch("http://localhost:4000/admin/currentorders")
        .then(res=>res.json())
        .then(body => setData(body.data))
        .catch(err => console.log(err))
    },[])
 
    console.log(data)
 useEffect(()=>{
    fetch("http://localhost:4000/order/statuschange",{
        method:"Post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
           id:id,
            value:age

        })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
 },[age])

    
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center" style={{ fontSize: "20ox", color: "#FE5F1E", paddingBottom: "10px" }}>
                            Current Orders
                        </h1>

                    </div>
                   {
                       data ? 
                       data.map((item,i)=>{
                           return (
                            <div id="no-more-tables">
                            <table class="col-md-12 table-bordered table-striped table-condensed cf">
                                <thead class="cf">
                                    <tr>
                                        <th style={{fontSize:"15px",width:"25%"}}>Order Id</th>
                                        <th style={{fontSize:"15px",width:"25%"}}>user</th>
                                        <th style={{fontSize:"15px",width:"25%"}}>Address</th>
                                        <th style={{fontSize:"15px",width:"25%"}}>Status</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-title="Code">
                                            <div className="p-2">
                                                <h5 style={{ fontWeight: "bolder",fontSize:"16px" }}>{item._id}</h5>
                                               {item.items.map((p,i)=>{
                                                   return (
                                                    <div style={{fontSize:"14px"}}><span style={{width:"20%"}}>{p.name}</span> <span style={{padding:"0px 10px"}}>x</span>  <span style={{padding:"0px 10px"}}>{p.qty}</span></div>
                                                 
                                                   )
                                               })}
                                            </div>
                                        </td>
                                        <td data-title="Company" style={{ paddingBottom: "50px" }}>
                                            <div style={{fontSize:"14px",}}>{item.user.name}</div>
                                            <div style={{fontSize:"14px",}}>{item.user.email}</div>
                                            <div style={{fontSize:"14px",}}>{item.phone}</div>
                                        </td>
                                        <td data-title="Price" style={{fontSize:"14px",paddingBottom: "50px"}}>{item.address}</td>
                                        <td data-title="Change" class="numeric">
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 ,fontSize:"16px"}}>
                                                
                                                <Select
                                                    
                                                    id="demo-simple-select-standard"
                                                    value={age}
                                                    onChange={(e) =>{
                                                        setAge(e.target.value)
                                                        setId(item._id)
                                                        socket?.emit('orderDetails',{
                                                            id:item._id,
                                                            age:e.target.value
                                                        })
                                                    }}
                                                   size="large"
                                                   style={{fontSize:"15px",marginBottom:"30px",width:"100%"}}
                                                >
                                                   
                                                    
                                                    <MenuItem  value="Order-placed">Order_placed</MenuItem>
                                                    <MenuItem  value="Order-confirmation">Order-confirmation</MenuItem>
                                                    <MenuItem  value="Preparing">Preparing</MenuItem>
                                                    <MenuItem  value="Out for delivery">Out for delivery</MenuItem>
                                                    <MenuItem  value="Completed">Completed</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </td>
                                      
                                    </tr>
                                   
                                    
    
                                </tbody>
                            </table>
                        </div>
                           )
                       })
                       :
                       <div>Loading ...</div>
                   }
                </div>

            </div>
        </div>
    )
}

export default Currentorders
