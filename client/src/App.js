import React from 'react';
import Router from './router/Route'
import "./index.css";
import CartContextProvider from './Global/CartContext';


function App() {
  return (
   <div>
     <CartContextProvider>
     <Router />
     </CartContextProvider>
     
   </div>
  );
}

export default App;
