// import React , {useContext} from 'react'
// import { CartContext } from '../Global/CartContext'
// import "./checkout.css"

// const Checkout = () => {
//     const {shoppingCart , totalPrice , qty}=useContext(CartContext)
//     console.log(shoppingCart)
//     return (
//         <div className="container">
        
		
			
// 			<div class="row">
// 				<form >
// 					<div class="col-lg-7 md-6 sm-12">
// 						<h3 class="topborder"><span>Billing Details</span></h3>
// 						{/* <label for="country">Country</label>
// 						<select name="country" id="country" required>
// 							<option value="">Please select a country</option>
// 							<option value="Canada">Canada</option>
// 							<option value="Not Canada">Not Canada</option>
// 						</select> */}
// 						<div class="width50 padright">
// 							<label for="fname">First Name</label>
// 							<input type="text" name="fname" id="fname" required />
// 						</div>
// 						<div class="width50">
// 							<label for="lname">Last Name</label>
// 							<input type="text" name="lname" id="lname" required />
// 						</div>
// 						{/* <label for="company">Company Name</label>
// 						<input type="text" name="company" id="company" required /> */}
// 						<label for="address">Address</label>
// 						<input type="text" name="address" id="address" required />
// 						{/* <input type="text" name="address" id="address2" placeholder="Optional" /> */}
// 						{/* <label for="city">Town / City</label>
// 						<input type="text" name="city" id="city" required /> */}
// 						<div class="width50 padright">
// 							<label for="province">Province</label>
// 							<select name="province" id="province" required>
// 								<option value="">Please select a province</option>
// 								<option value="ab">Alberta</option>
// 								<option value="bc">British Columbia</option>
// 								<option value="mb">Manitoba</option>
// 								<option value="nb">New Brunswick</option>
// 								<option value="nl">Newfoundland and Labrador</option>
// 								<option value="ns">Nova Socia</option>
// 								<option value="on">Ontario</option>
// 								<option value="pe">Prince Edward Island</option>
// 								<option value="qc">Quebec</option>
// 								<option value="sk">Saskatchewan</option>
// 								<option value="not-canada">Not Canada</option>
// 							</select>
// 						</div>
// 						<div class="width50">
// 							<label for="postcode">Postcode</label>
// 							<input type="text" name="postcode" id="postcode" placeholder="Postcode / Zip" required />
// 						</div>
// 						<div class="width50 padright">
// 							<label for="email">Email Address</label>
// 							<input type="text" name="email" id="email" required />
// 						</div>
// 						<div class="width50">
// 							<label for="tel">Phone</label>
// 							<input type="text" name="tel" id="tel" required />
// 						</div>
// 						{/* <input type="checkbox" value="2" name="checkbox" /><p>Create an account?</p> */}
// 						{/* <h3 class="topborder"><span>Shipping Address</span></h3> */}
// 						<input type="checkbox" value="3" name="checkbox" /><p>Ship to a different address?</p>
// 						<label for="notes" class="notes">Order Notes</label>
// 						<textarea name="notes" id="notes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
// 					</div>
// 					<div class="col-lg-5 md-4 sm-12 order">
// 						<h3 class="topborder"><span>Your Order</span></h3>
// 						<div class="row">
// 							<h4 class="inline">Product</h4>
// 							<h4 class="inline alignright">Total</h4>
// 						</div>
// 						<div>
// 							<p class="prod-description inline">Nice Dress<div class="qty inline"><span class="smalltxt">x</span> 1</div>
// 							</p>
// 						</div>
// 						<div><h5>Cart Subtotal</h5></div>
// 						<div>
// 							<h5 class="inline difwidth">Shipping and Handling</h5>
// 							<p class="inline alignright center">Free Shipping</p>
// 						</div>
// 						<div><h5>Order Total</h5></div>

// 						<div>
// 							<h3 class="topborder"><span>Payment Method</span></h3>
// 							<input type="radio" value="banktransfer" name="payment" checked /><p>Direct Bank Transfer</p>
// 							<p class="padleft">
// 								Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
// 							</p>
// 						</div>

// 						<div><input type="radio" value="cheque" name="payment" /><p>Cheque Payment</p></div>
// 						{/* <div>
// 							<input type="radio" value="paypal" name="payment" /><p>Paypal</p>
// 							<fieldset class="paymenttypes">
// 								<legend><img src="images/pay-pal.jpg" alt="PayPal Logo" class="paypal" /></legend>
// 								<img src="images/cards.jpg" alt="Visa, Mastercard, Maestro and Amex Credit Cards" class="cards" />
// 							</fieldset>
// 							<a href="#" class="padleft">What is Paypal?</a>
// 						</div> */}
// 						<input type="submit" name="submit" value="Place Order" class="redbutton" />
// 					</div>
// 				</form>
//                 </div>
// 			</div>

//     )
// }

// export default Checkout

import * as React  from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Cart from '../Components/Cart'
import { CartContext } from '../Global/CartContext';

function Checkout() {
	const {open}=React.useContext(CartContext)
  console.log(open)
  



//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

  return (
    <div >
      {[ 'right'].map((anchor) => (
       
	   <React.Fragment key={anchor}>
			{/* {toggleDrawer(anchor,open)} */}
			{/* {data.open ? toggleDrawer(anchor,data.open) :toggleDrawer(anchor,false)} */}
	{/* {toggleDrawer(anchor, true)}	 */}
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
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