import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Currentorders from './Currentorders';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Ordermenutabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{fontSize:"16px",width:"200px"}} label="Current Orders" {...a11yProps(0)} />
          <Tab style={{fontSize:"16px",width:"200px"}} label="Complete orders" {...a11yProps(1)} />
          <Tab style={{fontSize:"16px",width:"200px"}} label="deleted orders" {...a11yProps(1)} />
     
        </Tabs>
      </Box>
      <TabPanel  value={value} index={0}>
      <Currentorders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        second
      </TabPanel>
      <TabPanel value={value} index={2}>
        Delete orders
      </TabPanel>
     
    </Box>
  );

}
export default Ordermenutabs;