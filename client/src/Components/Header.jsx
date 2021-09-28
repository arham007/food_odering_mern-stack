import React from 'react'
import './Header.css'
import Hero from '../images/12.jpg'
const Header = () => {
    return (
        <div style={{marginBottom:"10px"}}>
            <div className="container" >
                <div className=" row container ">
                    <div className="col-xl-6 md-4 sm-12 div1">
                        <div style={{marginTop:"180px"}}>

                        <i style={{fontSize:"20px"}}>Are you hungry</i><br />
                        <h1 style={{fontSize:"50px"}}>Don't Wait ! </h1><br />
                        <button className='btnarham' style={{width:"25%",padding:"10px",border:"none",outline:"none",fontSize:"16px",borderRadius:"30px",backgroundColor:"#FE5F1E"}}>Order now</button>
                        <br />
                        </div>

                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-8 div2"  >
                        <div className="pakao">
                            <img className="img-fluid" style={{marginTop:"20px"}} src={Hero} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
