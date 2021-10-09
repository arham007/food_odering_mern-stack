import React , {useState} from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Slide from '@mui/material/Slide';
import Admincard from './Admincard';
import { CircularProgress } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Deleteproduct = ({id}) => {
  
    const [open,setOpen]=useState(true)
    let [load,setLoad]=useState(false)
    let [succ,setSucc]=useState(false)
    
    const handleChange=()=>{
        fetch(`http://localhost:4000/admin/delete/${id}`,{
            method:"delete",
            headers:{
                'Content-Type':"application/json"
            },
          
        }).then(res => res.json())
        .then(body =>{
            setLoad(false)
            setSucc(true)
            setTimeout(()=>{
                setSucc(false)
                setOpen(!open)
                window.location.reload()
            },3000)

        } )
        .catch(err => console.log(err))

    }
    
    return (
        <div>
            {
                open ? 
                <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
            <DialogTitle style={{fontSize:"20px",fontWeight:"bold"}}>{"Are you sure you want to delete this product"}</DialogTitle>
       
          
            
          <DialogActions>
          <Button style={{fontSize:"12px"}} variant="contained" color="secondary">Close</Button>
          <Button onClick={handleChange} style={{fontSize:"12px"}} variant="contained" >Submit</Button>
        </DialogActions>
       {
           load ? 
           <DialogContent>
           <div className="text-center" >
           <CircularProgress />
           </div>
           </DialogContent>
           :
           <div />
       }
        {
            succ ? 
            <DialogContent>
            <Stack>
        <Alert severity="success" style={{fontSize:"14px"}}>Product deleted Successfully!</Alert>
    </Stack>
        </DialogContent>
        :
        <div />
        }
</Dialog>
         :
         <div />
            }
   
        </div>
    )
}

export default Deleteproduct
