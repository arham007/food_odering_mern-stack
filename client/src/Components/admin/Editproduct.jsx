import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Editproduct=({item})=> {
  let [name,setName]=React.useState(item.name)
  let [price,setPrice]=React.useState(item.price)

  let [desc,setDesc]=React.useState(item.desc)
  let [category,setCategory]=React.useState(item.type)
  const [open, setOpen] = React.useState(true);
  
 

  const handleChange = () => {
    if(name==item.name && price==item.price && desc==item.desc && category==item.type){

      alert("nothing is change ")
      setOpen(false)
      
    }
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
        id:item._id
      })
    })
    .then(res => res.json())
    .then(body => console.log(body))
    .catch(err => console.log(err))
    
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
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
