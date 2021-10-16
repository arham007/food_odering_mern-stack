import React from 'react'
import "./adminmainpage.css"
import FavouriteItem from "./FavouriteItem"

const Adminmainpage = () => {
    return(
        <>
        <div class="container">
    <div class="row">
        <div class="col-md-4 col-xl-4">
            <div class="card bg-c-green order-card" >
                <div class="card-block" >
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
       
       <br />
       <br />

        <div className="container" style={{border:"2px solid #fff",boxShadow:"2px 2px 15px rgba(0,0,0,0.5)"}}>
            <div style={{width:"100%",borderRadius:"10px"}}>
            <div style={{textAlign:"end"}}>
                <div style={{fontSize:"20px",marginRight:"20px"}}>Recently Placed Order</div>
            </div>
            <hr />
            <table class="table table-striped">
  <thead >
    <tr style={{backgroundColor:"#FE5F1E"}}>
      <th  style={{fontSize:"14px"}} scope="col">Order Id</th>
      <th  style={{fontSize:"14px"}} scope="col">Customer Name</th>
      <th  style={{fontSize:"14px"}} scope="col">Address</th>
      <th  style={{fontSize:"14px"}} scope="col">Order Status</th>
      <th style={{fontSize:"14px"}}  scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th style={{fontSize:"14px"}} scope="row">3546545613213246354</th>
      <td style={{fontSize:"14px"}}>Mark</td>
      <td style={{fontSize:"14px"}}>#D Nazimabad No:3</td>
      <td style={{fontSize:"14px"}}><span style={{display:"inline",backgroundColor:"#7047ee",padding:"5px",borderRadius:'2px',color:"#fff"}}>Pending</span></td>
      <td style={{fontSize:"14px"}}>9:15pm</td>
    </tr>
    <tr>
      <th style={{fontSize:"14px"}} scope="row">3546545613213246354</th>
      <td style={{fontSize:"14px"}}>Mark</td>
      <td style={{fontSize:"14px"}}>#D Nazimabad No:3</td>
      <td style={{fontSize:"14px"}}><span style={{display:"inline",backgroundColor:"#ee3158",padding:"5px",borderRadius:'2px',color:"#fff"}}>Canceled</span></td>
      <td style={{fontSize:"14px"}}>9:15pm</td>
    </tr>
    <tr>
      <th style={{fontSize:"14px"}} scope="row">3546545613213246354</th>
      <td style={{fontSize:"14px"}}>Mark</td>
      <td style={{fontSize:"14px"}}>#D Nazimabad No:3</td>
      <td style={{fontSize:"14px"}}><span style={{display:"inline",backgroundColor:"#05825f",padding:"5px",borderRadius:'2px',color:"#fff"}}>Completed</span></td>
      <td style={{fontSize:"14px"}}>9:15pm</td>
    </tr>
    <tr>
      <th style={{fontSize:"14px"}} scope="row">3546545613213246354</th>
      <td style={{fontSize:"14px"}}>Mark</td>
      <td style={{fontSize:"14px"}}>#D Nazimabad No:3</td>
      <td style={{fontSize:"14px"}}><span style={{display:"inline",backgroundColor:"#ffa800",padding:"5px",borderRadius:'2px',color:"#fff"}}>Preparing</span></td>
      <td style={{fontSize:"14px"}}>9:15pm</td>
    </tr>
   
  </tbody>
</table>
            </div>
        </div>
<br />
<div style={{border:"2px solid #fff",boxShadow:"2px 2px 15px rgba(0,0,0,0.5)"}}>
  <div style={{textAlign:"end"}}>
  <div style={{fontSize:"20px",marginRight:"20px"}}>Favourite Items</div>
    <hr />
  </div >
  <div >

<FavouriteItem  />
  </div>
</div>
        </>
    )
}

export default Adminmainpage

