
import React, { useState ,useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'
import { useHistory } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


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



const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const classes = useStyles();
  const history=useHistory()


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onLogin=(e)=>{
    e.preventDefault();
    fetch("http://localhost:4000/signin",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(body =>{
      localStorage.setItem("token",body.token)
      localStorage.setItem("user",JSON.stringify(body.user))
     

      history.push("/")
      if(body.error){
        setOpen(true)
        
        setError(body.error)
      }
    })
    .catch(err => console.log(err))


  }
    return (
        <div>
            
    <section>

    <div className="container">
      <div className="user signinBx">
        <div className="imgBx"><img src={Logo} alt="" /></div>
        <div className="formBx">
          <form onSubmit={onLogin}>
            <h2>Sign In</h2>
            <input required onChange={(e)=> setEmail(e.target.value)}  type="email" name="" placeholder="Username" />
            <input required onChange={(e)=>setPassword(e.target.value)} type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
            <span style={{color:"crimson",fontSize:"12px",marginLeft:"5.5rem",cursor:"pointer"}}><Link to="/reset">Forget password</Link></span>
            <p className="signup">
              Don't have an account ?
              <Link to="/signup" >Sign Up.</Link>
            </p>
          </form>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{fontSize:"14px"}} severity="error">
          {error}
        </Alert>
      </Snackbar>
      </div>
      

    
    </div>
  </section>
        </div>
    )
}

export default Login
