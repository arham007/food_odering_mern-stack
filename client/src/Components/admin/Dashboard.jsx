// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       <div class="row">
//         <div class="col-xl-3 col-sm-6 mb-3">
//           <div class="card text-white bg-primary o-hidden h-100">
//             <div class="card-body">
//               <div class="card-body-icon">
//                 <i class="fa fa-fw fa-comments"></i>
//               </div>
//               <div class="mr-5">26 New Messages!</div>
//             </div>
//             <a class="card-footer text-white clearfix small z-1" href="#">
//               <span class="float-left">View Details</span>
//               <span class="float-right">
//                 <i class="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//         <div class="col-xl-3 col-sm-6 mb-3">
//           <div class="card text-white bg-warning o-hidden h-100">
//             <div class="card-body">
//               <div class="card-body-icon">
//                 <i class="fa fa-fw fa-list"></i>
//               </div>
//               <div class="mr-5">11 New Tasks!</div>
//             </div>
//             <a class="card-footer text-white clearfix small z-1" href="#">
//               <span class="float-left">View Details</span>
//               <span class="float-right">
//                 <i class="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//         <div class="col-xl-3 col-sm-6 mb-3">
//           <div class="card text-white bg-success o-hidden h-100">
//             <div class="card-body">
//               <div class="card-body-icon">
//                 <i class="fa fa-fw fa-shopping-cart"></i>
//               </div>
//               <div class="mr-5">123 New Orders!</div>
//             </div>
//             <a class="card-footer text-white clearfix small z-1" href="#">
//               <span class="float-left">View Details</span>
//               <span class="float-right">
//                 <i class="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//         <div class="col-xl-3 col-sm-6 mb-3">
//           <div class="card text-white bg-danger o-hidden h-100">
//             <div class="card-body">
//               <div class="card-body-icon">
//                 <i class="fa fa-fw fa-support"></i>
//               </div>
//               <div class="mr-5">13 New Tickets!</div>
//             </div>
//             <a class="card-footer text-white clearfix small z-1" href="#">
//               <span class="float-left">View Details</span>
//               <span class="float-right">
//                 <i class="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ReorderIcon from '@mui/icons-material/Reorder';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemAvatar } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import Adminmenu from './Adminmenu';
import Editproduct from './Editproduct';
const drawerWidth = 200;

function Dashboard() {
    let [menu , setMenu]=React.useState(false)
    
   
   
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor:"#FE5F1E"}} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography  variant="h4" noWrap component="div">
            Arham's Foods
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box class="mt-5" >
            <Divider>
                <ListItem button style={{marginLeft:"-20px"}}>
                   <span ><DashboardIcon style={{fontSize:"20px",color:"#FE5F1E",margin:"0 15px"}}  /></span>
                <ListItemText ><span style={{fontSize:"18px",fontWeight:"500"}}>Dashboard</span></ListItemText>
                </ListItem>
            </Divider>
            <hr />
            <Divider>
                <ListItem button style={{marginLeft:"-20px"}}>
                   <span ><ReorderIcon style={{fontSize:"22px",color:"#FE5F1E"}}  /></span>
                <ListItemText style={{margin:"0 20px"}}><span style={{fontSize:"18px",fontWeight:"500"}}>Orders</span></ListItemText>
                </ListItem>
            </Divider>
            <hr />

            <Divider>
                <ListItem button style={{marginLeft:"-20px"}}>
                
                   <span ><RestaurantIcon style={{fontSize:"20px",color:"#FE5F1E"}}  /></span>
                <ListItemText style={{margin:"0 20px"}}><span style={{fontSize:"18px",fontWeight:"500"}} onClick={()=>setMenu(true)}>Menu</span>
     
           
       
                
                </ListItemText>
                </ListItem>
            </Divider>
            <hr />

            <Divider>
                <ListItem button style={{marginLeft:"-20px"}}>
                   <span ><LogoutIcon style={{fontSize:"20px",color:"#FE5F1E"}}  /></span>
                <ListItemText style={{margin:"0 20px"}}><span style={{fontSize:"18px",fontWeight:"500"}}>Logout</span></ListItemText>
                </ListItem>

            </Divider>
        
            <hr />
      
         
        </Box>
     
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {menu ? 
        <Adminmenu />
        :
        <div />    
    }
    
      </Box>
    </Box>
    
  
  );
}
export default Dashboard