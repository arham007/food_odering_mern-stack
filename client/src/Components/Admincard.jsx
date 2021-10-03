import React, { useState } from 'react'
import "./toggle.css"
import Category from  "./Category"
const Admincard = () => {

    // useEffect(()=>{
    
    // },[])
    const [state,setState]=useState(false)
    console.log(state)
  
    
 
    return (
        <div className="container">
            <Category />
            <div className="row">
           <div className="col-md-4">
                <div  className="card-md" style={{height:"500px !important",border:"2px solid #f2f2f2"}}>
                    <div className="card-image">
                        <img loading="lazy" style={{width:"100%",height:"320px"}}
                            src="https://i.imgur.com/xdbHo4E.png" />
                    </div>

                   
                    <div className="card-heading" style={{fontSize:"16px"}}>

                        <span style={{fontSize:"14px",height:"20px"}}>burger</span>
                    </div>
                   
                        <div className="card-text"   >
                           adffgfgafgfga
                            
                        </div>
                    
                    <div className="card-text" style={{fontSize:"18px",fontWeight:"bolder"}}>
                        Rs 500
                    </div>
                    <div  className="card-text" style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{fontSize:"20px"}}>Disable</div> 
                        <div  >
                        <label class="switch">
  <input id="check" type="checkbox" checked={state} onClick={(e)=> {
      setState(!state)
     
      
  } } />
  <span class="slider round"></span>
</label>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>

                    <a  className="card-button" style={{fontSize:"16px",cursor:"pointer",borderRadius:"0"} } >Edit</a>
                    <a  className="card-button" style={{fontSize:"16px",cursor:"pointer",borderRadius:"0"} } >Delete</a>
                   
                    </div>
                </div>
                </div>


                
            </div>
            
        </div>
    )
}

export default Admincard
