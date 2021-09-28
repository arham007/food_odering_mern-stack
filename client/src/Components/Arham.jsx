import React,{useContext, useState} from 'react'
import {CartContext} from '../Global/CartContext'


const Arham = () => {
	let {shoppingCart,qty,totalPrice}=useContext(CartContext)
  const [address,setAdress]=useState("")
  const [phone,setPhone]=useState("")
  const [notetorider,setnotetorider]=useState("")
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
      notetorider:notetorider
    })
  }).then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
 }
  return (
		<div>
	

  {/* <!--Main layout--> */}
  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">

      {/* <!-- Heading --> */}
      <h2 class="my-5 h2 text-center">Checkout form</h2>

      {/* <!--Grid row--> */}
      <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-md-8 mb-4">

          {/* <!--Card--> */}
          <div class="card">

            {/* <!--Card content--> */}
            <form class="card-body" >

              {/* <!--Grid row--> */}
              <div class="row">

                {/* <!--Grid column--> */}
                <div class="col-md-6 mb-2">

                  {/* <!--firstName--> */}
                  <div class="md-form ">
                    <label for="firstName" style={{fontSize:"16px",fontWeight:"600"}} class="">First name</label>
                    <input type="text"  id="firstName" style={{fontSize:"14px"}}  class="form-control" />
                  </div>

                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-md-6 mb-2">

                  {/* <!--lastName--> */}
                  <div class="md-form">
                    <label for="lastName" class="" style={{fontSize:"16px",fontWeight:"600"}}>Last name</label>
                    <input style={{fontSize:"14px"}}  type="text" id="lastName" class="form-control" />
                  </div>

                </div>
                {/* <!--Grid column--> */}

              </div>
              {/* <!--Grid row--> */}

              {/* <!--Username--> */}
              

              {/* <!--email--> */}
              

              {/* <!--address--> */}
              <div class="md-form mb-5">
                <label for="address" class="" style={{fontSize:"16px",fontWeight:"600"}}>Address</label>
                <input onChange={(e)=> setAdress(e.target.value)} style={{fontSize:"14px"}}  type="text" id="address" class="form-control" placeholder="1234 Main St" />
              </div>

              {/* <!--address-2--> */}
              <div class="md-form mb-5">
                <label for="address-2" style={{fontSize:"16px",fontWeight:"600"}} class="">Phone</label>
                <input style={{fontSize:"14px"}} onChange={(e)=> setPhone(e.target.value)}  type="tel" id="address-2" class="form-control" placeholder="Apartment or suite" />
              </div>

			  <div class="md-form mb-5">
                <label for="address-2" style={{fontSize:"16px",fontWeight:"600"}} 	 class="">Note to Rider</label>
                <textarea  onChange={(e)=> setnotetorider(e.target.value)}   style={{height:"120px",fontSize:"16px"}} class="form-control" placeholder="Apartment or suite" ></textarea>
              </div>

            
		

             
              <hr class="mb-4" />
              <button onClick={orderPlaced} style={{padding:"10px 0",fontSize:"16px",backgroundColor:"#FE5F1E",color:"#fff"}} class="btn  btn-lg btn-block" type="submit">Place Order</button>

            </form>

          </div>
          {/* <!--/.Card--> */}

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div class="col-md-4 mb-4">

          {/* <!-- Heading --> */}
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill" style={{backgroundColor:"#FE5F1E"}}>{qty}</span>
          </h4>

          {/* <!-- Cart --> */}
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

export default Arham
