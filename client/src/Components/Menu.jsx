import React , {useContext} from 'react'
import Category from './Category'
import Header from './Header'
import Navbar from './navbar/Navbar'
import Show from './Show';
import { CartContext } from '../Global/CartContext';
import Checkout from './Checkout';

const Menu = () => {
   
    return (
        <div >
        <Navbar />
        <Header />
        <br />
        <Category />
        <Show />
        <Checkout />
        </div>
    


    )
}

export default Menu
