import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';



// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }


export default function MelodyNav() {
//   const theme = useTheme();
  const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Navigate = useNavigate()
  const handleAll = () =>{
    Navigate('/melodies')
  }
  const handleNature = () =>{
    Navigate('/nature')
  }
  const handleMusical = () =>{
    Navigate('/musical')
  }
  const handleCategory = () =>{
    Navigate('/category')
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
        position: 'relative',
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
       
          <Tab onClick={handleAll} sx={{fontWeight:'bolder'}} label="All" />
          <Tab onClick={handleNature} sx={{fontWeight:'bolder'}} label="Nature" />
          <Tab onClick={handleMusical} sx={{fontWeight:'bolder'}} label="Musical" />
          <Tab onClick={handleCategory} sx={{fontWeight:'bolder'}} label="Category"  />
        </Tabs>
      </AppBar>
    </Box>
  );
}