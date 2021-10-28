import React , {useEffect} from 'react';
import Router from './router/Route'
import "./index.css";
import CartContextProvider from './Global/CartContext';
import Adminrouter from './router/Adminrouter';


function App() {
  

  return (
   <div>
     <CartContextProvider>
     <Router />
     <Adminrouter />
     </CartContextProvider>
     
   </div>
  );
}

export default App;
