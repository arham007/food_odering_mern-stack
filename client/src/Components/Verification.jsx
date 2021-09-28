import React, { useState } from 'react';
import './Verification.css';
import { useParams, useHistory } from "react-router-dom"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const Verification = () => {
  const history = useHistory("")
  const [verified, setVerfied] = useState("")
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [message, SetMessage] = useState("")
 
  const [click, Setclick] = useState(false)
 
  const { token } = useParams()
 
  token.toString()
  
  const code = token.split("+").pop()
  const a = localStorage.getItem("user")
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

 




  


  const checkVerifed = () => {
    Setclick(true)
    
      fetch("http://localhost:4000/verification", {
        method: "Post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          a,
          code:code,
          usercode:verified
          
        

        })
      }).then(res => res.json())
        .then(body => {
            setOpen(true)
            Setclick(false)
            console.log(body)

            SetMessage(body)
           
            if(body.message){
              setTimeout(() => {
                history.push("/login")
              }, 3000)
            }
          
        })
        .catch(err => console.log(err))
    
  }

  return (
    <div style={{ minHeight: "100vh", width: "99vw" }}>
      <div class="row">
        <div class="col-md-12">
          <div class="main-verification-input-wrap">
            <ul>
              <li style={{ fontSize: "14px" }}>You will recieve a verification code on your mail after you registered. Enter that code below.</li>
              <li style={{ fontSize: "14px" }}>If somehow, you did not recieve the verification email then <a href="#">resend the verification email</a></li>
            </ul>
            <div class="main-verification-input fl-wrap">
              <div class="main-verification-input-item"> <input style={{ fontSize: "14px", }} type="tel" maxLength="4" onChange={(e) => setVerfied(e.target.value)} placeholder="Enter the verification code" /> </div>
              <button onClick={checkVerifed} class="main-verification-button" style={{ fontSize: "14px" }} >Verify Now</button>
             
            </div>
            { 
                click ? 
                <div style={{ textAlign: "center" }}>


              <CircularProgress style={{ marginTop: "5rem" }} />
            </div>
            :
            <div />
            
            }
            
          </div>
        </div>
        

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} style={{ fontSize: "14px" }} severity={message.message ? "success" : "error"} >
            {message.message ? message.message : message.error}
          </Alert>
        </Snackbar>
         
       
      </div>
     
    </div>
  )
}


export default Verification
