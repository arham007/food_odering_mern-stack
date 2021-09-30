import * as React from 'react';

import { Link } from 'react-router-dom';
import moment from "moment"







function Summary() {
  let [orders,setOders]=React.useState()
  React.useEffect(()=>{
    fetch("http://localhost:4000/placedorder",{
      method:"Get",
      headers:{
        "X-Requested-With":"XMLHttpRequest",
        'Content-Type':"application/json",
        'Authorization':localStorage.getItem("token"),
      }
    })
    .then(res => res.json())
    .then(({orders}) => setOders(orders))
    .catch(err => console.log(err))
  },[])


  return (
      <div className="container">

<div className="table-responsive-lg">

<table class="table">
  <thead>
    <tr>
      <th scope="col" style={{fontSize:"18px"}} >Orders</th>
      <th scope="col" style={{fontSize:"18px"}} >Address</th>
      <th scope="col" style={{fontSize:"18px"}} >Time</th>
      
    </tr>
  </thead>
  <tbody>
    {
      
      orders ? 
      orders.map((item,i)=>{
        return(
          <tr key={i}>
          <th style={{fontSize:"16px"}}    scope="row"><Link>{item._id}</Link></th>
          <td style={{fontSize:"16px"}}   >{item.address}</td>
          <td style={{fontSize:"16px"}}   >{moment(item.createdAt).calendar()}</td>
          
        </tr>
        )
      })
      :
      <div />
    } 
   
  </tbody>
</table>
    </div>

          </div>
  );
}
export default  Summary