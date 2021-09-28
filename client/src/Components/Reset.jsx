import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useHistory } from 'react-router-dom';
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


const Reset = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const history=useHistory("")
  

  const handleClose = (event, reason) => {
   history.push("/login")

    setOpen(false);
  };

  const onFill=(e)=>{
    e.preventDefault();
    setClick(true)
    fetch("http://localhost:4000/reset",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email
      })
    }).then(res => res.json())
    .then(data => {
      if(data){
        setClick(false)
        setMessage(data)
        setOpen(true)
      }
    })
    .catch(err => console.log(err))

  }



    return (
        <div className="Arham">
<div class="form-gap" style={{paddingTop:"20rem"}}></div>
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center " style={{fontSize:"24px"}}>Forgot Password?</h2>
                  <p style={{fontSize:"14px"}}>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form id="register-form" onSubmit={onFill} role="form" autocomplete="off" class="form">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i  style={{padding:"3.5px",marginLeft:"-8.5px"}} class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input required onChange={(e)=> setEmail(e.target.value)} size="Large" style={{fontSize:"16px",padding:"5px"}} id="email" name="email" placeholder="email address" class="form-control"  type="email" />
                        </div>
                      </div>
                      <div class="form-group">
                        <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" />
                      </div>
                      
                      <input type="hidden" class="hide" name="token" id="token" value="" /> 
                    </form>
                  </div>
                  {
                    click ?
                    <CircularProgress />
                    :
                    <div />

                  }
                </div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{fontSize:"14px"}} severity={message.error ? "error" : "success"}>
          {message.message ? message.message : message.error}
        </Alert>
      </Snackbar>

     
              </div>
            </div>
          </div>
	</div>
</div>
        </div>
    )
}

export default Reset
