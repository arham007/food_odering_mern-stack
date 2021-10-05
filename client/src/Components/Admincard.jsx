import React, { useState , useEffect } from 'react'
import "./toggle.css"
import Category from  "./Category"
import Editproduct from "./admin/Editproduct"
const Admincard = () => {
    const [state,setstate]=useState(false)
    const[item,setItem]=useState({})
    
    let [data,setData]=useState([])
    useEffect(()=>{
      
        fetch("http://localhost:4000/allproduct")
        .then(res =>res.json())
        .then(body => setData(body))
        .catch(err => console.log(err))
    
    },[])
    
    const disableCard=(id)=>{
        fetch("http://localhost:4000/admin/disable",{
            method:"Post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                id:id,
                

            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    // console.log(data)
    
  
    
 
    return (
        <div className="container">
            {/* <Category /> */}
            <div className="row">
              {
                  data.body ? 
                  data.body.map((item,i)=>{
                      return (
                          <>
                          <div className="col-md-4">
                <div  className="card-md" style={{height:"500px !important",border:"2px solid #f2f2f2",marginBottom:"10px",borderRadius:"20px"}}>
                    <div className="card-image">
                        <img loading="lazy" style={{width:"100%",height:"320px"}}
                            src={item.image} />
                    </div>

                   
                    <div className="card-heading" style={{fontSize:"16px",height:"50px"}}>

                        <span style={{fontSize:"14px",height:"20px"}}>{item.name}</span>
                    </div>
                   
                        {/* <div className="card-text"   >
                        
                            
                        </div> */}
                    
                    <div className="card-text" style={{fontSize:"18px",fontWeight:"bolder"}}>
                        Rs {`${item.price}`}
                    </div>
                    <div  className="card-text" style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{fontSize:"20px"}}>Status</div> 
                        <div  >
                        <label class="switch">
  <input id="check" type="checkbox"  autocomplete="off"
   onClick={()=> disableCard(item._id)} />
  <span class="slider round"></span>
</label>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>

                    <a onClick={()=>{
                        setstate(!state)
                        setItem(item)
                    }}   className="card-button" style={{fontSize:"16px",cursor:"pointer",borderRadius:"0"} } >Edit</a>
                    <a  className="card-button" style={{fontSize:"16px",cursor:"pointer",borderRadius:"0"} } >Delete</a>
                 
                    </div>
                </div>
             
                </div>
               
                          </>
                      )
                  })
                  :
                  <div>Loading .....</div>
              }
           
           {
                state && item ?
                
                <Editproduct item={item}  /> 
                :
                 <div />
            }
              
            </div>

            
        </div>
    )
}

export default Admincard
