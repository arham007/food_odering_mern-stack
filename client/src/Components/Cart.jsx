import React , {useContext} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@mui/icons-material/Clear';

import Logo from "../images/emp.png"
import { useHistory } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';


const Cart=()=>{
    const history=useHistory("")
    let {shoppingCart , totalPrice , qty , dispatch}=useContext(CartContext)
    console.log(shoppingCart)
    
    
      return(
        <>
                    <div onClick={()=> dispatch({type:'OPEN'
                         })}  style={{cursor:"pointer",width:"100%",display:"flex",justifyContent:"flex-end"}}   >
			<ClearIcon style={{fontSize:"30px",color:"crimson",marginTop:"20px"}}   />
			</div> 
          
                {/* <Navbar /> */}
          <div className="container"  style={{width:"100%",display:"flex",height:"500px",overflowY:"scroll",overflowX:"hidden"}}>
          
              <div className="row">
             
            
            <div className="col-lg-6 md-6 sm-12"  style={{width:"75%",border:"1px solid #fafafa",borderRadius:"5px"}}>
            

                        <h2 className="text-danger text-center mb-4">Your Cart </h2>
            
            {
                shoppingCart <= 0 ?
                <span className="container-fluid text-center" >
                    
                    <div className="text-center m-lg-3"><img className="img-fluid"  src={Logo} width="500px" style={{textAlign:"center",marginLeft:"65px"}} /></div>
                    <div><h1 className="text-center mb-5" style={{margin:"50px",fontFamily:"monospace",fontWeight:"900",fontSize:'24px',width:"100%",color:"#FE5F1E"}}>Your Cart is Empty</h1></div>
                    </span>
                :
                shoppingCart.map((item , i)=>{
                    return(
                       
                       <>
                     
                       <div  style={{display:"flex",alignItems:"center",background:"#fff",padding:"15px"}} key={1}>
                       
                        <span style={{display:"inline-block",width:"80px",cursor:"pointer",height:"80px"}}>
                            <img src={item.image} style={{width:"100%" , height:"100%"}} />
                            </span>
                        <span style={{width:"100px",padding:"0 10px",fontWeight:"bold",fontSize:"14px",cursor:"pointer",display:"inline-block"}}>{item.name}</span>
                        <span  style={{display:"inline-block",width:"120px",paddin:"0 10px",textAlign:"center",cursor:"pointer",fontWeight:"bold",color:"black",fontSize:"16px"}} className="cart-product-price">Rs {item.price}</span>
                        <span 
                        onClick={()=> dispatch({type:"INC",payload:{
                            id:item._id,
                            item
                        }})}
                    
                        style={{display:"inline-block",width:"30px",height:"25px",lineHeight:"30px",cursor:"pointer",textAlign:"center",border:"1px solid blue",fontSize:"14px",color:"black",borderRadius:"3px"}}><AddIcon style={{marginTop:"-7px"}} /></span>
                        <span className="cart-quantity" style={{display:"inline-block",padding:"0 15px",fontSize:"15px",width:"70px",textAlign:"center"}}>{item.qty}</span>
                        <span className="dec"
                        onClick={()=> dispatch({type:"DEC",payload:{
                            id:item._id,
                            item
                        }})}
                          style={{display:"inline-block",width:"30px",height:"25px",cursor:"pointer",lineHeight:"30px",textAlign:"center",border:"1px solid rgb(187,58,58)",fontSize:"14px",color:"rgb(187,58,58)",borderRadius:"3px"}}><RemoveIcon style={{marginTop:"-7px"}} /></span>
                        <span className="cart-total-price" style={{display:"inline-block",width:"120px",cursor:"pointer",padding:"0 15px",textAlign:"center",fontSize:"16px"}}>{item.price * item.qty}</span>
                        <span
                                                onClick={()=> dispatch({type:"DELETE",payload:{
                                                    id:item._id,
                                                    item
                                                }})}
                         className="delete-product"  style={{border:"none",color:"rgb(187,58,58)",cursor:"pointer",width:"20px"}}  ><DeleteIcon fontSize="Large" /></span>
      

                </div>  
        </>
        )
    })
    
} 

                    
    

         
                    
                </div>
             
               
             
                </div> 
                </div>



{
    qty > 0 ?
    <div class="col-lg-12 md-12 sm-12">
<hr />


<div class="mb-12">
  <div class="pt-3">

    <h5 class="mb-3" style={{fontSize:"16px"}}>The total amount of</h5>

    <ul class="list-group list-group-flush">
      <li style={{fontSize:"13px"}} class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        Temporary amount
        <span>${totalPrice}</span>
      </li>
      <li style={{fontSize:"13px"}} class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        Quantity
        <span>{qty}</span>
      </li>
      <li style={{fontSize:"13px"}} class="list-group-item d-flex justify-content-between align-items-center px-0">
        Delivery Charges
        <span>$50</span>
      </li>
      <hr />
      <li style={{fontSize:"13px"}} class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
        <div>
          <strong >The total amount of</strong>
          <strong>
            <p class="mb-0">(including VAT)</p>
          </strong>
        </div>
        <span><strong>${totalPrice + 50}</strong></span>
      </li>
    </ul>

    <button type="button" onClick={()=> history.push("/checkout")} class="btn btn-primary btn-block" style={{backgroundColor:"#FE5F1E",border:"none",padding:"8px 0",fontSize:"13px"}}>go to checkout</button>

  </div>
</div>




</div>
:
<div />

}



   

</>


  
    ) 
}

export default Cart;