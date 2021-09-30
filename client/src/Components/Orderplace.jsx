import React,{useContext, useState} from 'react'
import {CartContext} from '../Global/CartContext'


const Orderplace = () => {
	let {shoppingCart,qty,totalPrice}=useContext(CartContext)
  const [address,setAdress]=useState("")
  const [disable,setDisable]=useState(false)
  const [phone,setPhone]=useState("")
  const [notetorestaurant,setnotetorestaurant]=useState("")
  let name=JSON.parse(localStorage.getItem("user"))
  
 

 
  const orderPlaced=(e)=>{
   e.preventDefault()
  fetch("http://localhost:4000/placeorder",{
    method:"Post",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
    body:JSON.stringify({
      items:shoppingCart,
      address:address,
      phone:phone,
      note:notetorestaurant
    })
  }).then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
 }
 
  return (
		<div>
	

  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">

      <h2 class="my-5 h2 text-center">Checkout form</h2>


      <div class="row">

      
        <div class="col-md-8 mb-4">

          <div class="card">

            <form class="card-body" >

 
        

     
                  <div class="md-form mb-5" >
                    <label for="firstName" style={{fontSize:"16px",fontWeight:"600"}} class="">First name</label>
                    <input type="text" value={name.name} id="firstName" style={{fontSize:"14px"}}  class="form-control" />
                  </div>

                  <div class="md-form mb-5" >
                    <label for="email" style={{fontSize:"16px",fontWeight:"600"}} class="">Email</label>
                    <input type="text" value={name.email} id="firstName" style={{fontSize:"14px"}}  class="form-control" />
                  </div>

               
              
              

              <div class="md-form mb-5">
                <label for="address" class="" style={{fontSize:"16px",fontWeight:"600"}}>Address</label>
                <input onChange={(e)=> setAdress(e.target.value)} style={{fontSize:"14px"}}  type="text" id="address" class="form-control" placeholder="1234 Main St" />
              </div>

              <div class="md-form mb-5">
                <label for="address-2" style={{fontSize:"16px",fontWeight:"600"}} class="">Phone</label>
                <input style={{fontSize:"14px"}} onChange={(e)=> setPhone(e.target.value)}  type="number" id="address-2" class="form-control" placeholder="Apartment or suite" />
              </div>

			  <div class="md-form mb-5">
                <label for="address-2" style={{fontSize:"16px",fontWeight:"600"}} 	 class="">Note to Rider</label>
                <textarea  onChange={(e)=> setnotetorestaurant(e.target.value)}   style={{height:"120px",fontSize:"16px"}} class="form-control" placeholder="Apartment or suite" ></textarea>
              </div>

            
		

             
              <hr class="mb-4" />
            
             {
               address && phone ? 
               <button id="placeorderbtn" onClick={orderPlaced} style={{padding:"10px 0",fontSize:"16px",backgroundColor:"#FE5F1E",color:"#fff"}} class="btn  btn-lg btn-block" type="submit">Place Order</button>
               :
               <button id="placeorderbtn" disabled style={{padding:"10px 0",fontSize:"16px",backgroundColor:"#FE5F1E",color:"#fff"}} class="btn  btn-lg btn-block" >Place Order</button>
             }
            
        

            </form>

          </div>
      

        </div>
     
        <div class="col-md-4 mb-4">

          
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill" style={{backgroundColor:"#FE5F1E"}}>{qty}</span>
          </h4>

     
          <ul class="list-group mb-3 z-depth-1">
         {
			 shoppingCart.map((item,i)=>{
				 return (
					<li key={i} class="list-group-item d-flex justify-content-between lh-condensed">
					<div>
					  <h6 class="my-0" style={{fontSize:"14px"}}>{item.name}</h6>
					  <small class="text-muted" style={{fontSize:"12px"}}>x {item.qty}</small>
					</div>
					<span  style={{fontSize:"14px",color:"black"}}>{item.price * item.qty}</span>
				  </li>
				 )
			 })
		 }
            
               
            <li class="list-group-item d-flex justify-content-between">
              <span style={{fontSize:'16px'}}>Delivery Charges</span>
              <strong style={{fontSize:"14px"}}>50</strong>
            </li>
            <div className="mt-5">
            <li class="list-group-item d-flex justify-content-between">
              <span style={{fontSize:'16px'}}>Total (USD)</span>
              <strong style={{fontSize:"14px"}}>{totalPrice + parseInt(50)}</strong>
            </li>
			</div>
          </ul>
         
       
        

        </div>
        {/* <!--Grid column--/> */}

      </div>
      {/* <!--Grid row--> */}

    </div>
  </main>
 
		</div>
	)
}

export default Orderplace
