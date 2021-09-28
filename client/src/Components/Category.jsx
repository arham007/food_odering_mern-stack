import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'



function Category() {
  return (
      <div className="container">

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#FE5F1E"}}>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to="/" style={{color:"#fff"}}> All</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
           <Link to="/fastfood" style={{color:"white"}} > Fastfoods</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to="/bbq" style={{color:"#fff"}} > BBQ</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to="/pizza" style={{color:"#fff"}}> pizza</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to="/beverage" style={{color:"#fff"}} > Beverages </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to="/extra" style={{color:"#fff"}} > Extras</Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
      </div>
  );
}
export default Category;