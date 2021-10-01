import React, { useEffect, useState , useContext } from 'react'
import "./Card.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import Skeleton from "./Skeleton"
import { CartContext } from '../Global/CartContext';



const Card = () => {
    let [response,setResponse]=useState([])
    let [open,setOpen]=useState(false)
    const [Skip, setSkip] = useState(0)
    const [postsize, setpostsize] = useState(0)
    const [Limit, setLimit] = useState(9)
    const [str, setstr] = useState(false)
    
    
   
    const {shoppingCart , totalPrice , qty , dispatch}=useContext(CartContext)
    console.log(shoppingCart,totalPrice ,qty)
    

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

     
       getproducts(variables)
    }, [])



    const getproducts=(variables)=>{
        setOpen(true)
        fetch('http://localhost:4000/products',{
            method:"Post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({variables})
        })
        .then(res => res.json())
        .then(({data,postSize}) =>{
            setResponse([...response,...data])
            setOpen(false)
            setpostsize(postSize)
            // setData([...data,...data])
        })
        .catch(err => console.log(err))
    }
    
    const onLoadMore = (e) => {
        e.preventDefault()
        let skip = Skip + Limit;
        
        const variables = {
            skip: skip,
            limit: Limit,
            
        }
        getproducts(variables)
        setSkip(skip)
    }

    
    
    // console.log(postsize)
   
    return (
        <div className="container cardsss" style={{marginTop:"50px"}} >
            
           
            <div className="row">
               
        {response.length  > 1 ? 
             response.map((item)=>{
                let string=new String(item.desc)
                return(
                    <>
                <div className="col-md-4">
                <div key={item._id} className="card-md" style={{height:"500px !important",marginBottom:"20px"}}>
                    <div className="card-image">
                        <img loading="lazy" style={{width:"100%",height:"320px"}}
                            src={item.image} />
                    </div>

                    <a className="card-action" href="#"><i className="fa fa-heart"></i></a>
                    <div className="card-heading" style={{fontSize:"16px",height:"90px"}}>

                        <span style={{marginTop:"-50px",fontSize:"14px",height:"20px"}}>{item.name}</span>
                    </div>
                   
                        <div className="card-text" style={{height:"90px"}}   >
                            {item.desc}
                            {/* <p>{string.length >=30 ? 
                            
                            <div>
                                {!str ? string.slice(0,30) : string } <div onClick={()=> setstr(!str)} style={{textDecoration:"underLine",cursor:"pointer",color:"blue"}}>{str ? "hide ": "show more"}</div>
                            </div>
                            :
                            <div>{string}</div>

                            }</p>
                             */}
                        </div>
                    
                    <div className="card-text" style={{fontSize:"18px",fontWeight:"bolder"}}>
                        Rs {parseInt(item.price)}
                    </div>
                    <a  className="card-button" style={{fontSize:"16px",cursor:"pointer"} } onClick={()=>{dispatch({type:'ADD_TO_CART',payload:{
                        id:item._id,
                        item
                    }})}} >Add to cart</a>
                </div>
            </div>
            
          </>
             )
        })
        :
        [1,2,3,4,5,6,7,8,9].map((item,i)=>{
            return (
                <div className="col-lg-4 md-4 sm-12">
                    <Skeleton />
                  </div>
            )

         })
        }

       
               
           
        
</div>  
{
    postsize < Limit ? <div />
    :
   
    <div  id="loadMore" onClick={onLoadMore}><span>Load more</span></div>

}  


</div>
)
}

export default Card;
