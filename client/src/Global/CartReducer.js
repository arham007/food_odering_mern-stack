export const CartReducer=(state,action)=>{
    const {shoppingCart , qty , totalPrice}=state
let product;
let index;
let UpdatedQty;
let UpdatedPrice;

  switch(action.type){
      case "ADD_TO_CART":
          const check=shoppingCart.find(p => p._id === action.payload.id)
          if(check){
              return {shoppingCart,totalPrice,qty,open:true}
          }else{
              product=action.payload.item;
              product['qty']=1;
              UpdatedQty=qty + 1;
              UpdatedPrice=parseInt(totalPrice )+ parseInt(product.price);
              return {shoppingCart:[product,...shoppingCart],totalPrice:UpdatedPrice,qty:UpdatedQty,open:true}
            }
    case "ORDER-PLACED":
          
            return {shoppingCart:[],totalPrice:0,qty:0 , opne:false}

    case 'OPEN':
        // product=action.payload.item
        return{...state,open:false}
            
    case 'NAV':
        return {...state,open:action.payload}

  
     case 'INC':
              product=action.payload.item
              product.qty=product.qty + 1
              UpdatedPrice=parseInt(totalPrice) + parseInt(product.price);
              UpdatedQty=qty + 1
              index=shoppingCart.findIndex(c => c._id === action.payload.id);
              shoppingCart[index]=product;
              return {shoppingCart:[...shoppingCart],totalPrice:UpdatedPrice,qty:UpdatedQty,open:true} 
       
          break;

          case 'DEC':

            product=action.payload.item
            if(product.qty > 1) {
                product.qty=product.qty - 1
                UpdatedPrice=parseInt(totalPrice) - parseInt(product.price);
                UpdatedQty=qty - 1;
                index=shoppingCart.findIndex(c => c._id === action.payload.id);
                shoppingCart[index]=product;
                return {shoppingCart:[...shoppingCart],totalPrice:UpdatedPrice,qty:UpdatedQty,open:true} 

                
            }else{
                return state
                            }
           
     
        break;

        case 'DELETE':
                const filtered=shoppingCart.filter(c => c._id !== action.payload.id)
                product=action.payload.item;
                UpdatedQty=qty - product.qty;
                UpdatedPrice=totalPrice - product.price * product.qty;
                return {shoppingCart:[...filtered],totalPrice:UpdatedPrice,qty:UpdatedQty,open:true}

        
          default :
        return state
  }
}