import React, { useState } from 'react';

import Logo from '../images/logo.jpg'
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles'; 
import {useParams , useHistory} from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



const Newpassword = () => {
    const [password,setPassword]=useState("")
    const [confirm,setConfirm]=useState("")
    const [click,setClick]=useState(false);
    const [open, setOpen] = useState(false);
    const [message,setMessage]=useState("")
    const {token}=useParams()
    const history=useHistory()
  const classes = useStyles();

  const handleClose = (event, reason) => {
    

    setOpen(false);
    history.push('/login')
  };



    const updatePasword=(e)=>{
      e.preventDefault()
    
      if(confirm==password){
        fetch("http://localhost:4000/newpassword",{
          method:"Post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            password,
            token
          })
          
        })
        .then(res => res.json())
        .then(body =>{
         setMessage(body)
         setOpen(true)
        })
        .catch(err=> console.log(err))
        
      }else{
        setClick(true)
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        
      }
       
    }


    return (
      <div>
            
      <section>
  
      <div className="container">
          <div className="imgBx"><img src={Logo} alt="" /></div>
        <div className="user signinBx">
          <div className="formBx">
            <form onSubmit={updatePasword}>
              <h2>Password Reset</h2>
              <input required onChange={(e)=>
                {
                  setClick(false)
                   setPassword(e.target.value)
                   }}type="password" id="first" placeholder="Password" />
              <input required onChange={(e)=> setConfirm(e.target.value)}   type="password" id="second" placeholder="Confirm Password" />
              <input style={{fontSize:"12px"}} type="submit" name="" value="Update Password" />
        
        
           <div>
             {
               click ?

          <Alert  style={{fontSize:"14px",marginTop:"2rem"}} severity="error" >Password doesn't match</Alert>
              :
              <div />
        }
             </div> 
            </form>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{fontSize:"14px"}} severity={message.error ? "error" : "success"}>
          {message.message ? message.message : message.error}
        </Alert>
      </Snackbar>
         
        </div>
        
  
      
      </div>
    </section>
          </div>
      )
     
    
      
}

export default Newpassword
