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
import Ordermenutabs from "./Ordermenutabs"

const drawerWidth = 200;

function AdminOrders() {
   
    
   const history=useHistory()
   
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
              <ListItemText onClick={()=> history.push("/admin/dashboard")} ><span style={{fontSize:"18px",fontWeight:"500"}} >Dashboard</span></ListItemText>
              </ListItem>
          </Divider>
          <hr />
          <Divider>
              <ListItem button style={{marginLeft:"-20px"}}>
                 <span ><ReorderIcon style={{fontSize:"22px",color:"#FE5F1E"}}  /></span>
              <ListItemText onClick={()=> history.push("/admin/orders")} style={{margin:"0 20px"}}><span style={{fontSize:"18px",fontWeight:"500"}}>Orders</span></ListItemText>
              </ListItem>
          </Divider>
          <hr />

          <Divider>
              <ListItem button style={{marginLeft:"-20px"}}>
              
                 <span ><RestaurantIcon style={{fontSize:"20px",color:"#FE5F1E"}}  /></span>
              <ListItemText onClick={()=> history.push("/admin/menu")} style={{margin:"0 20px"}}><span style={{fontSize:"18px",fontWeight:"500"}} >Menu</span>
   
         
     
              
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
       <Ordermenutabs />
    
      </Box>
    </Box>
    
  
  );
}
export default AdminOrders
