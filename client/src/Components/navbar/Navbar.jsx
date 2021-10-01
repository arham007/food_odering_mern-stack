import React, { useState , useContext } from 'react';
import '../navbar/Navbar.css'
import Logo from '../../images/menu-image5.jpg';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from '../../Global/CartContext';
import { useHistory } from 'react-router';
import Cart from '../Cart';
import Checkout from '../Checkout';

const Navbar = () => {
  let token=localStorage.getItem("token");
  let user=localStorage.getItem("user")
  const data=useContext(CartContext)
  console.log(data)
  const [open,setOpen]=useState(false)
  const Checking=()=>{
    setOpen(!open)
  }
  const history=useHistory()
  
    return (
        <div>
          <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title" style={{color:"black"}}  >
     <span><img src={Logo} style={{width:"7%",borderRadius:"50%"}} />  Arham's Foods</span>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check" style={{color:"orange",backgroundColor:"black"}}>
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a className="border-nav" style={{color:"black",cursor:"pointer"}} onClick={()=> history.push("/")} >Menu</a>
    <a className="border-nav" style={{color:"black",cursor:"pointer"}} >Offers</a>
    <a className="border-nav" style={{color:"black",cursor:"pointer"}} >MyOrders</a>
    {token && user ? 
    <a className="border-nav" style={{color:"black",cursor:"pointer"}} onClick={()=>{
      localStorage.clear()
      history.push("/")
    }}>Logout</a>  
    :
    <a className="border-nav" style={{color:"black",cursor:"pointer"}} onClick={()=> history.push("/login")}  >Login</a>
  }
    <a class="nav-link waves-effect" style={{cursor:"pointer"}} onClick={()=>{
      data.dispatch({
        type:"NAV",
        payload:true
        
      })
    }}  >
                            
                            <span><AddShoppingCartIcon fontSize="Large" style={{color:"black"}} /></span>
                            <span class="badge  z-depth-1 mr-1" style={{background:"red"}}> {data.qty} </span>
                        </a>
   
  </div>
 

</div>
        




        </div>
    )
}



export default Navbar
