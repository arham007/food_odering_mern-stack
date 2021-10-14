import React from 'react'
import "./adminmainpage.css"

const Adminmainpage = () => {
    return(
        <>
        <div class="container">
    <div class="row">
        <div class="col-md-4 col-xl-4">
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20" style={{fontSize:"18px"}}>All Orders</h6>
                    <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>486</span></h2>
                    <p class="m-b-0" style={{fontSize:"16px"}}>Current Orders<span class="f-right">0</span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-4">
            <div class="card bg-c-blue order-card">
                <div class="card-block">
                    <h6 class="m-b-20" style={{fontSize:"18px"}}>Orders Received</h6>
                    <h2 class="text-right"><i class="fa fa-rocket f-left"></i><span>486</span></h2>
                    <p class="m-b-0" style={{fontSize:"14px"}}>Completed Orders<span class="f-right">351</span></p>
                </div>
            </div>
        </div>
        
     
        
        <div class="col-md-4 col-xl-4">
            <div class="card bg-c-pink order-card">
                <div class="card-block">
                    <h6 class="m-b-20" style={{fontSize:"18px"}}>Canceled Orders</h6>
                    <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>486</span></h2>
                    <p class="m-b-0" style={{fontSize:"14px"}}>pending orders<span class="f-right">351</span></p>
                    
                </div>
            </div>
        </div>
	</div>
</div>
       
        </>
    )
}

export default Adminmainpage

