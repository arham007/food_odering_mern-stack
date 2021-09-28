import  React, { useEffect, useState , useContext } from 'react'
import "./Card.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import Category from './Category'
import Header from './Header'
import Navbar from './navbar/Navbar';
import { CartContext } from '../Global/CartContext';
import Checkout from './Checkout';


const Fastfood = () => {
    const { dispatch}=useContext(CartContext)
    let [data,setData]=useState([])
    let [open,setOpen]=useState(false)
    useEffect(() => {
        setOpen(true)
        fetch('http://localhost:4000/fastfood')
        .then(res => res.json())
        .then(({data}) =>{
            setOpen(false)
            setData(data)
        })
        .catch(err => console.log(err))
        
        return () => {
            
        }
    }, [])
    return (
        <div >
        <Navbar />
        <Header />
        <br />
        <Category />
        <br />
        <div className="container cardsss" style={{marginTop:"50px"}} >
                {open ?
               <div  style={{textAlign:"center"}}> <CircularProgress /></div>

            :    
        <div className="row">
            {data==null ? 
            <div/>
            :
            data.map((item,i)=>{
                return(
                    <>
                    <div className="col-md-4">
                <div className="card-md" style={{height:"500px !important",marginBottom:"20px",}}>
                    <div className="card-image">
                        <img style={{width:"100%",height:"320px"}}
                            src={item.image} />
                    </div>

                    <a className="card-action" href="#"><i className="fa fa-heart"></i></a>
                    <div className="card-heading" style={{fontSize:"16px",height:"90px"}}>

                        <span style={{marginTop:"-50px",fontSize:"14px",height:"20px"}}>{item.name}</span>
                    </div>
                   
                        <div className="card-text" style={{height:"90px"}}>
                            {item.desc}
                        </div>
                    
                    <div className="card-text" style={{fontSize:"18px",fontWeight:"bolder"}}>
                        Rs {item.price}
                    </div>
                    <a className="card-button" style={{fontSize:"16px",cursor:"pointer"}} 
                    onClick={()=>{dispatch({type:'ADD_TO_CART',payload:{
                                                id:item._id,
                                                item
                                            }})}}
                    > Add to cart</a>
                </div>
            </div>


                    </>
                )
            })
}

<Checkout />
</div>    
}
</div>
        
        </div>
    )
}

export default Fastfood


