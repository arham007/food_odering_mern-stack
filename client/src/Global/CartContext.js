import React ,{createContext,useEffect,useReducer} from "react";
import { CartReducer } from "./CartReducer";


export const CartContext=createContext();

const CartContextProvider=(props)=>{
    
    const [cart,dispatch]=useReducer(CartReducer,{shoppingCart:[],totalPrice:0,qty:0,open:false},()=>{
        let localData=localStorage.getItem("carts");
        return localData ? JSON.parse(localData) : {shoppingCart:[],totalPrice:0,qty:0,open:false}
    })
    useEffect(()=>{
        let carts=localStorage.setItem("carts",JSON.stringify(cart))
    },[cart])
    





    return(
   <CartContext.Provider value={{...cart,dispatch}}>
       {props.children}
   </CartContext.Provider>
)
}

export default CartContextProvider;