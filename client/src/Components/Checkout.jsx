import * as React  from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Cart from '../Components/Cart'
import { CartContext } from '../Global/CartContext';

function Checkout() {
	const {open}=React.useContext(CartContext)
  console.log(open)
  

  return (
    <div >
      {[ 'right'].map((anchor) => (
       
	   <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={open}
          >
         <div style={{width:"500px",overflow:"hidden"}}>
			
			<Cart />
         </div>
		  </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Checkout;