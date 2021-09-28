import React, { useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";
import Logo from '../images/logo.jpg'
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

const Signup = () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false);
  const [message,setMessage]=useState();
  const [error,setError]=useState();
  const[openerr,setOpenerr]=useState(false)
  const [click,setClick]=useState("");
  const classes = useStyles();
  // const classess = useStyless();

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleCloseerrr = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenerr(false);
  };

  const user={
    name,
    email,
    password,

  }
  const onSignup = (e) => {
    e.preventDefault();
    setClick(true)
    

    localStorage.setItem('user', JSON.stringify(user))
    

    fetch("http://localhost:4000/signup", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    })
    .then(res => res.json())
    .then(body =>{
      if(body.message){
        setClick(false)
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        setMessage(body.message)
        setOpen(true)

      }if(body.error){
        setClick(false)

        setError(body.error)
        setOpenerr(true)
        
      }
      console.log(body)
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
      <section>
        <div class="container">
          <div class="user signinBx">
            <div class="formBx">
              <form onSubmit={onSignup}>
                <h2>Sign In</h2>
                <input required onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Username" />
                <input required onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email Address" />
                <input required onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Create Password" />

                <input type="submit" name="" value="Sign Up" />
                <p class="signup">
                  Don't have an account ?
                  <Link to="/login" >Sign in.</Link><br />
                  {
                    click ?
                     <div style={{textAlign:"center",marginTop:"20px"}}><CircularProgress /></div>
                    :
                    <div />
                  }
                </p>
              </form>
              
            </div>


            <div class="imgBx"><img src={Logo} alt="" /></div>

          </div>
          
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{fontSize:"14px"}} severity="success" >
          {message}
        </Alert>
      </Snackbar>

      <Snackbar open={openerr} autoHideDuration={6000} onClose={handleCloseerrr}>
        <Alert onClose={handleCloseerrr} style={{fontSize:"14px"}} severity="error">
          {error}
        </Alert>
      </Snackbar>

   
     
        </div>
        

      </section>
      
  
    </div>
    

  );
}

export default Signup;