import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import Stack from '@mui/material/Stack';



import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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


const Editproduct=({item})=> {
  let [name,setName]=React.useState(item.name)
  let [price,setPrice]=React.useState(item.price)
  let [image,setImage]=React.useState(item.image)
  let [desc,setDesc]=React.useState(item.desc)
  let [category,setCategory]=React.useState(item.type)
  const [open, setOpen] = React.useState(true);
  const [url,setUrl]=React.useState("")
  const [check,setCheck]=React.useState(false)
  const [message,setMessage]=React.useState("")


  React.useEffect(()=>{
    fetch("http://localhost:4000/admin/editproduct",{
      method:"Post",
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify({
        name,
        price,
        desc,
        type:category,
        id:item._id,
        image:url
        
      })
    })
    .then(res => res.json())
    .then(body => {
      console.log(body)
      if(body.message){
        setMessage(body.message)
        // setOpen(false)
        setCheck(true)
       
      }
      
    })
    .catch(err => console.log(err))
    

  },[url])
  
  const handleClosed=()=>{
    setMessage("")
    setOpen(false)
  }
 

 
const handleChange = () => {
  const data=new FormData()
  data.append("file",image)
  data.append("upload_preset","adminedit")
  data.append("cloud_name","arham333")

  fetch("	https://api.cloudinary.com/v1_1/arham333/image/upload",{
    method:"Post",
    body:data
  })
  .then(res => res.json())
  .then(res =>{
   
    setUrl(res.url)
  })
  .catch(err => console.log(err))
}

  



    
    
   





  const handleClose = () => {
    setOpen(false);
  };

 
  
   

  return (
    <div>
     
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{fontSize:"20px",fontWeight:"bold"}}>{"You wanted to edit the product?"}</DialogTitle>
       
          
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label" style={{fontSize:"14px"}}>Product-Name:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)} style={{fontSize:"14px"}} class="form-control" id="recipient-name" defaultValue={item.name} />
          </div>
          </DialogContentText>
          <div style={{margin:"10px 0"}}>
          <label  for="recipient-name" class="col-form-label" style={{fontSize:"14px",color:"rgba(0, 0, 0, 0.6)"}}>Product-Name:</label>

        
          <input style={{fontSize:"12px"}} type="file" onChange={(e)=>   setImage(e.target.files[0])}/>
        </div>

     
          <DialogContentText id="alert-dialog-slide-description">
            <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label" style={{fontSize:"14px"}} >Product-Category:</label>
            <br />
            <select style={{width:"100%",fontSize:"14px"}} class="form-control" class="col-form-label" onChange={(e)=>setCategory(e.target.value)} defaultValue={item.type}>
                <option className="text-center">===Choose any one===</option>
                <option>fastfood</option>
                <option>BBQ</option>
                <option>pizza</option>
                <option>beverage</option>
                <option>extra</option>
            </select>
          </div>
          </form>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label" style={{fontSize:"14px"}}>Product-Description:</label>
            <textarea type="text" style={{fontSize:"14px"}}  rows={5}  class="form-control" id="recipient-name" defaultValue={item.desc} onChange={(e)=> setDesc(e.target.value)} ></textarea>
          </div>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label" style={{fontSize:"14px"}}>Product-Price:</label>
            <input type="text" style={{fontSize:"14px"}} defaultValue={item.price}   class="form-control" id="recipient-price" onChange={(e)=>setPrice(e.target.value)}  />
            
          </div>

          </DialogContentText>
        {
          message ?
          <DialogContentText>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClosed} >
        <Alert style={{fontSize:"14px"}} severity="success" onClose={handleClosed}>
          {message}
        </Alert>
      </Snackbar>
      </DialogContentText>

:
<div />
        }
         
        </DialogContent>
          <DialogActions>
          <Button style={{fontSize:"12px"}} variant="contained" color="secondary" onClick={handleClose}>Close</Button>
          <Button style={{fontSize:"12px"}} variant="contained" onClick={handleChange}>Submit</Button>
        </DialogActions>

 

   
    
      </Dialog>
   
     
     
  

    </div>
  )
}

export default Editproduct
